const rooms = {};
const fs = require('fs');
const path = require('path');
const BOT_DRAWINGS = require('./botDrawings');

function joinRoom(socket, roomId, username, avatar) {
  if (!rooms[roomId]) {
    rooms[roomId] = {
      id: roomId,
      players: [],
      gameState: 'WAITING', // WAITING, PLAYING, ENDED
      drawingHistory: [], // Store drawing actions
      chatHistory: [],     // Store chat messages
      botInterval: null   // Store bot drawing interval ID
    };
  }

  const room = rooms[roomId];
  const player = {
    id: socket.id,
    username,
    avatar: avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`, // Fallback
    score: 0
  };

  room.players.push(player);
  socket.join(roomId);

  return { room, player };
}

// ... existing code ...

function storeDrawing(roomId, data) {
    if (rooms[roomId]) {
        rooms[roomId].drawingHistory.push(data);
    }
}

function clearDrawingHistory(roomId) {
    if (rooms[roomId]) {
        rooms[roomId].drawingHistory = [];
    }
}

function storeMessage(roomId, messageData) {
    if (rooms[roomId]) {
        rooms[roomId].chatHistory.push(messageData);
    }
}

module.exports = {
  joinRoom,
  leaveRoom,
  startGame,
  handleGuess,
  selectWord,
  startRoundTimer,
  storeDrawing,
  clearDrawingHistory,
  storeMessage,
  getRoom
};

function getRoom(roomId) {
    return rooms[roomId];
}

function leaveRoom(socket) {
  // Logic to remove player from room
  for (const roomId in rooms) {
    const room = rooms[roomId];
    const index = room.players.findIndex(p => p.id === socket.id);
    if (index !== -1) {
      room.players.splice(index, 1);
      if (room.players.length === 0) {
        delete rooms[roomId];
      }
      return { roomId, players: room.players || [] };
    }
  }
  return null;
}

let WORDS = [];

try {
    const rawData = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf8');
    WORDS = rawData.split('\n').map(w => w.trim()).filter(w => w.length > 0);
    console.log(`Loaded ${WORDS.length} words from words.txt`);
} catch (err) {
    console.error("Failed to load words.txt, using fallback.", err);
    WORDS = ["apple", "banana", "house", "car", "tree", "dog", "cat", "computer", "sun", "moon"];
}

function getThreeRandomWords() {
    const shuffled = [...WORDS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function startGame(roomId, io) {
    if (rooms[roomId]) {
        // Activate Bot Mode if single player
        console.log(`Starting game for room ${roomId}. Players: ${rooms[roomId].players.length}`);
        if (rooms[roomId].players.length === 1 && !rooms[roomId].isBotActive) {
            rooms[roomId].players.push({
                id: 'bot',
                username: 'A.I. Bot',
                avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=ai`,
                score: 0,
                isBot: true
            });
            rooms[roomId].isBotActive = true;
            io.to(roomId).emit('update_player_list', rooms[roomId].players);
        }

        rooms[roomId].gameState = 'SELECTING_WORD';
        
        let drawer;
        
        if (rooms[roomId].isBotActive) {
            // In Bot Mode, the Bot ALWAYS draws
            drawer = rooms[roomId].players.find(p => p.isBot);
        } else {
            // Normal Rotation
            let nextDrawerIndex = 0;
            const currentDrawerIndex = rooms[roomId].players.findIndex(p => p.id === rooms[roomId].drawer);
            
            if (currentDrawerIndex !== -1) {
                nextDrawerIndex = (currentDrawerIndex + 1) % rooms[roomId].players.length;
            }
            drawer = rooms[roomId].players[nextDrawerIndex];
        }

        rooms[roomId].drawer = drawer.id;
        
        if (rooms[roomId].botInterval) {
            clearInterval(rooms[roomId].botInterval);
            rooms[roomId].botInterval = null;
        }

        // Handle Bot Turn
        if (drawer.isBot) {
             // Reset drawing history for new round
             rooms[roomId].drawingHistory = [];

             const botWords = Object.keys(BOT_DRAWINGS);
             const word = botWords[Math.floor(Math.random() * botWords.length)];
             const drawingActions = BOT_DRAWINGS[word];
             
             rooms[roomId].currentWord = word;
             rooms[roomId].gameState = 'PLAYING';
             rooms[roomId].timeLeft = 60;
             
             console.log(`Bot Drawing: ${word}`);
             
             // 1. Notify Round Start
             io.to(roomId).emit('round_start', { 
                 drawer: drawer.id, 
                 drawerName: drawer.username 
             });
             
             // 2. Notify Word Selected (Dashes)
             io.to(roomId).emit('word_selected', { 
                 dashes: word.replace(/[a-zA-Z]/g, "_ "),
                 length: word.length
             });
             
             // 3. Start Timer (clears old timer internally)
             startRoundTimer(roomId, io);
             
             // 4. Start Drawing Loop
             let actionIndex = 0;
             rooms[roomId].botInterval = setInterval(() => {
                 if (!rooms[roomId] || rooms[roomId].gameState !== 'PLAYING' || actionIndex >= drawingActions.length) {
                     clearInterval(rooms[roomId].botInterval);
                     rooms[roomId].botInterval = null;
                     return;
                 }
                 
                 const action = drawingActions[actionIndex];
                 io.to(roomId).emit('draw_line', action);
                 rooms[roomId].drawingHistory.push(action); // Store for history
                 
                 actionIndex++;
             }, 500); // Draw a line every 500ms
             
             return null; // Handled manually
        }
        
        // Normal Human Turn
        const options = getThreeRandomWords();
        rooms[roomId].wordOptions = options;
        rooms[roomId].currentWord = null; 
        rooms[roomId].timeLeft = 15; 
        
        console.log(`Room ${roomId}: Drawer is ${drawer.username}`);
        
        startRoundTimer(roomId, io); // Start 15s timer for word selection

        return { 
            gameState: 'SELECTING_WORD',
            drawer: drawer.id,
            options: options,  
            roundInfo: {
                drawer: drawer.username
            }
        };
    }
}


let roomTimers = {};

function startRoundTimer(roomId, io) {
    if (roomTimers[roomId]) clearInterval(roomTimers[roomId]);
    
    // We don't settimeLeft here, we assume it was set by the state changer (startGame or selectWord)
    // Actually safer to read current state and set default if invalid? 
    // Let's rely on the caller setting rooms[roomId].timeLeft first.
    
    roomTimers[roomId] = setInterval(() => {
        if (!rooms[roomId]) {
             clearInterval(roomTimers[roomId]);
             return;
        }
        
        rooms[roomId].timeLeft -= 1;
        io.to(roomId).emit('timer_update', rooms[roomId].timeLeft);
        
        if (rooms[roomId].timeLeft <= 0) {
            clearInterval(roomTimers[roomId]);
            // Time's up! Logic depends on state
            
            if (rooms[roomId].gameState === 'SELECTING_WORD') {
                // Drawer took too long. Auto-select random word or skip turn?
                // Auto-select first option
                const autoWord = rooms[roomId].wordOptions[0];
                io.to(roomId).emit('receive_message', { 
                    author: 'System', message: 'Drawer took too long! Auto-selecting word.', isSystem: true 
                });
                selectWord(roomId, autoWord, io);
                // Notification to socket/client handled inside selectWord (fires word_selected to room)
                // But we need to ensure selectWord broadcasts properly.
                // selectWord calls startRoundTimer again for the 60s phase.
                
                // We need to tell clients the word was selected
                 io.to(roomId).emit('word_selected', { 
                     dashes: autoWord.replace(/[a-zA-Z]/g, "_ "),
                     length: autoWord.length
                 });
                 // Also tell drawer (if still connected)
                 io.to(rooms[roomId].drawer).emit('your_word', autoWord);
                 
            } else if (rooms[roomId].gameState === 'PLAYING') {
                 io.to(roomId).emit('round_end', { reason: 'Time is up!', word: rooms[roomId].currentWord });
            
                // Auto-start next round after delay
                setTimeout(() => {
                    const gameData = startGame(roomId);
                    if (gameData) {
                        io.to(roomId).emit('round_start', { 
                            drawer: gameData.drawer,
                            drawerName: gameData.roundInfo.drawer
                        });
                        io.to(gameData.drawer).emit('choose_word', gameData.options);
                        startRoundTimer(roomId, io); // Start 15s timer for next selection
                    }
                }, 3000);
            }
        }
    }, 1000);
}

function selectWord(roomId, word, io) {
    if (rooms[roomId] && rooms[roomId].wordOptions.includes(word)) {
        rooms[roomId].currentWord = word;
        rooms[roomId].gameState = 'PLAYING';
        
        // Start Timer for Drawing (60s)
        rooms[roomId].timeLeft = 60;
        startRoundTimer(roomId, io);
        
        return {
            word: word,
            dashes: word.replace(/[a-zA-Z]/g, "_ ")
        };
    }
    return null;
}



function handleGuess(roomId, playerSocketId, guess) {
    const room = rooms[roomId];
    if (!room || room.gameState !== 'PLAYING' || !room.currentWord) return { isCorrect: false };

    const cleanGuess = guess.toLowerCase().trim();
    const cleanWord = room.currentWord.toLowerCase().trim();

    if (cleanGuess === cleanWord) {
        const player = room.players.find(p => p.id === playerSocketId);
        const drawer = room.players.find(p => p.id === room.drawer);
        
        // CHECK IF DRAWER REVEALED WORD
        if (room.drawer === playerSocketId) {
             if (player) {
                 player.score = Math.max(0, player.score - 50); // Deduct 50 points, min 0
             }
             return { isCorrect: true, isDrawerReveal: true };
        }

        // NORMAL CORRECT GUESS
        if (player) {
            player.score += 100;
        }
        if (drawer) {
            drawer.score += 20; // Drawer gets points for good drawing
        }
        
        return { isCorrect: true, isDrawerReveal: false }; // Correct guess
    }
    
    // Check for "Close" guess
    const distance = levenshtein(cleanGuess, cleanWord);
    console.log(`Guess: ${cleanGuess}, Target: ${cleanWord}, Dist: ${distance}`);
    
    if (distance > 0 && distance <= 2 && cleanWord.length >= 3) {
        return { isCorrect: false, isClose: true };
    }
    
    return { isCorrect: false };
}

function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        );
      }
    }
  }
  return matrix[b.length][a.length];
}


