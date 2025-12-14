const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow connections from any IP (mobile, etc.)
    methods: ["GET", "POST"]
  }
});

const { 
    joinRoom, 
    leaveRoom, 
    handleGuess, 
    startGame, 
    selectWord, 
    startRoundTimer,
    storeDrawing,
    clearDrawingHistory,
    storeMessage,
    getRoom,
    updateRoomSettings
} = require('./gameManager');

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  socket.on('join_room', ({ username, roomId, avatar }) => {
    const result = joinRoom(socket, roomId, username, avatar);
    
    if (result.error) {
        socket.emit('error', { message: result.error });
        return;
    }

    const { room, player } = result;
    console.log(`${username} joined room ${roomId}`);
    
    // Notify others in the room
    socket.to(roomId).emit('user_joined', { username });
    
    // Broadcast updated player list to EVERYONE in the room (including sender)
    io.to(roomId).emit('update_player_list', room.players);
    
    // Auto-start game logic if enough players (or just force it for testing)
    // Only start if we are in WAITING state and have enough players (e.g. 2)
    let gameData = null;
    // Check if game is already in progress
    if (room.gameState !== 'WAITING') {
        // If game is already in progress, maybe send current game state to new joiner?
        // 'room_joined' event handles basic state, but they might need current dashes/drawer info.
        // For now, room object has currentWord (if we wanted to cheat) or we mask it.
        // The client relies on 'round_start' for drawer info. We might need to send that to late joiners.
        const currentDrawer = room.players.find(p => p.id === room.drawer);
        socket.emit('round_start', {
             drawer: room.drawer,
             drawerName: currentDrawer ? currentDrawer.username : 'Unknown'
        });
        
        // If word is selected, send dashes
        if (room.currentWord && room.gameState === 'PLAYING') {
             socket.emit('word_selected', {
                 dashes: room.currentWord.replace(/[a-zA-Z]/g, "_ "),
                 length: room.currentWord.length
             });
        }
    }

    // Send room state to the joining user
    // We send 'room' which is the object from joinRoom. 
    // If startGame modified it (by reference), 'room' is already up to date.
    socket.emit('room_joined', room);
  });
  
  // Game Settings Update (Admin Only)
  socket.on('update_settings', ({ roomId, settings }) => {
      const updatedSettings = updateRoomSettings(roomId, settings);
      if (updatedSettings) {
          io.to(roomId).emit('settings_update', updatedSettings);
      }
  });

  socket.on('start_game', (data) => {
    // Only host can start? 
    // Logic inside startGame handles generic start
    const gameData = startGame(data.roomId, io, true); // true = New Game
    
    if (gameData) {
       io.to(data.roomId).emit('game_starting'); // Countdown logic on client
       
       // Note: The Countdown on client takes 3s.
       // after 3s client sets state to PLAYING/SELECTING.
       // But server returns gameData IMMEDIATELY (Selecting Word state).
       // We should match timing.
       
       setTimeout(() => {
           io.to(data.roomId).emit('round_start', { 
               drawer: gameData.drawer,
               drawerName: gameData.roundInfo.drawer,
               round: 1,
               maxRounds: 3
           });
           io.to(gameData.drawer).emit('choose_word', gameData.options);
           startRoundTimer(data.roomId, io);
       }, 3000);
    }
  });

  socket.on('select_word', ({ roomId, word }) => {
     const result = selectWord(roomId, word, io);
     if (result) {
         // Notify everyone word chosen
         io.to(roomId).emit('word_selected', { 
             dashes: result.dashes,
             length: result.word.length
         });
         
         // Send actual word to drawer so they remember what they picked
         // Simpler: assume socket is drawer
         socket.emit('your_word', result.word);
     }
  });

  socket.on('draw', (data) => {
    const { roomId } = data;
    // Broadcast to everyone else in the room
    socket.to(roomId).emit('draw_line', data);
  });

  socket.on('clear_canvas', ({ roomId }) => {
    clearDrawingHistory(roomId);
    socket.to(roomId).emit('clear_canvas');
  });

  socket.on('send_message', (data) => {
    const { roomId, message, author } = data;
    console.log('Received message:', message, 'from', author, 'in room', roomId);
    
    // Check if it matches the word
    const result = handleGuess(roomId, socket.id, message);
    console.log('Guess result:', result);
    
    if (result.isCorrect) {
        let systemMessage = '';
        let stopReason = '';
        
        if (result.isDrawerReveal) {
            systemMessage = `${author} (Drawer) spoiled the word! -50 Points!`;
            stopReason = 'Drawer spoiled the word!';
        } else {
            systemMessage = `${author} guessed the word!`;
            stopReason = `${author} guessed it!`;
        }

        const messageData = {
            author: 'System',
            message: systemMessage,
            time: new Date().toLocaleTimeString(),
            isSystem: true
        };
        storeMessage(roomId, messageData); // Store system msg
        
        io.to(roomId).emit('receive_message', messageData);
        
        const room = getRoom(roomId);
        if (room) {
            io.to(roomId).emit('update_player_list', room.players);
        }
        
        io.to(roomId).emit('round_end', { reason: stopReason, word: message }); // Message is the word if guessed correctly
        
        // Stop timer & Restart
        setTimeout(() => {
            const gameData = startGame(roomId, io);
            if (gameData) {
                io.to(roomId).emit('round_start', { 
                    drawer: gameData.drawer,
                    drawerName: gameData.roundInfo.drawer
                });
                
                // Also update scores again if round start logic changed anything (e.g. rotation)
                 const updatedRoom = getRoom(roomId);
                 if (updatedRoom) {
                    io.to(roomId).emit('update_player_list', updatedRoom.players);
                 }

                io.to(gameData.drawer).emit('choose_word', gameData.options);
                startRoundTimer(roomId, io); 
            }
        }, 3000);  
        
    } else {
        // Store plain message in history
        storeMessage(roomId, data); 
        
        if (result.isClose) {
             // Only sender sees yellow
             socket.emit('receive_message', { ...data, isClose: true });
             // Others see white
             socket.to(roomId).emit('receive_message', data);
        } else {
             // Everyone sees normal 
             io.to(roomId).emit('receive_message', data);
        }
    }
  });

  socket.on('disconnect', () => {
    const result = leaveRoom(socket);
    if (result) {
       io.to(result.roomId).emit('user_left', { id: socket.id });
       io.to(result.roomId).emit('update_player_list', result.players);
    }
    console.log('user disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
