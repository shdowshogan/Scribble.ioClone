import { useState, useEffect } from 'react';
import socket from './socket';
import Lobby from './components/Lobby';
import Canvas from './components/Canvas';
import Chat from './components/Chat';
import WaitingRoom from './components/WaitingRoom';
import InteractiveBackground from './components/InteractiveBackground';
import './App.css';

import PlayerList from './components/PlayerList';
import WordSelectionModal from './components/WordSelectionModal';
import GameOverModal from './components/GameOverModal';

function App() {
  const [isInGame, setIsInGame] = useState(false);
  const [roomData, setRoomData] = useState(null);
  const [username, setUsername] = useState('');
  
  // Game State
  const [roundInfo, setRoundInfo] = useState(null); // { drawer, drawerName }
  const [wordOptions, setWordOptions] = useState([]);
  const [currentWord, setCurrentWord] = useState(''); // Or dashes
  const [isDrawer, setIsDrawer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [maxTime, setMaxTime] = useState(60);
  const [notification, setNotification] = useState(null); // { message, type }
  const [gameOverStats, setGameOverStats] = useState(null);
  
  // New States
  const [countdown, setCountdown] = useState(null); // 3, 2, 1, null
  const [gameState, setGameState] = useState('WAITING'); // 'WAITING', 'PLAYING'

  useEffect(() => {
    socket.on('room_joined', (data) => {
      setRoomData(data);
      setGameState(data.gameState || 'WAITING');
      setIsInGame(true);
    });

    socket.on('update_player_list', (players) => {
        setRoomData(prev => ({ ...prev, players }));
    });

    socket.on('game_starting', () => {
        let count = 3;
        setCountdown(count);
        const interval = setInterval(() => {
            count--;
            if (count > 0) {
                setCountdown(count);
            } else {
                setCountdown('GO!');
                clearInterval(interval);
                setTimeout(() => {
                    setCountdown(null);
                    // Don't overwrite if round_start already fired and set SELECTING_WORD
                    setGameState(prev => prev === 'SELECTING_WORD' ? prev : 'PLAYING');
                }, 1000);
            }
        }, 1000);
    });

    socket.on('round_start', (data) => {
        setRoundInfo(data);
        setIsDrawer(data.drawer === socket.id);
        setWordOptions([]); // Clear old options
        setCurrentWord('');
        setTimeLeft(15);
        setMaxTime(15);
        setNotification(null); // Clear notifications on new round
        setGameState('SELECTING_WORD'); // Waiting for word selection
    });
    
    socket.on('timer_update', (time) => {
        setTimeLeft(time);
    });
    
    socket.on('round_end', ({ reason, word }) => {
        setNotification({
            message: `${reason} The word was: ${word}`,
            type: 'info'
        });
    });

    socket.on('game_over', (players) => {
        setGameOverStats(players);
    });

    socket.on('choose_word', (options) => {
        setWordOptions(options);
    });

    socket.on('word_selected', ({ dashes }) => {
        setCurrentWord(dashes);
        setWordOptions([]); 
        setTimeLeft(60);
        setMaxTime(60);
        setGameState('PLAYING');
    });
    
    socket.on('your_word', (word) => {
        setCurrentWord(word);
    });

    socket.on('game_reset', (room) => {
        setGameOverStats(null);
        setGameState('WAITING');
        setRoundInfo(null);
        setDrawingHistory([]);
        setRoomData(room);
        setNotification(null);
    });

    socket.on('room_expired', () => {
        alert("Session expired (Server Restarted). Returning to lobby.");
        window.location.reload();
    });

    return () => {
       // Cleanup listeners
       socket.off('room_joined');
       socket.off('update_player_list');
       socket.off('game_starting');
       socket.off('round_start');
       socket.off('choose_word');
       socket.off('word_selected');
       socket.off('your_word');
       socket.off('timer_update');
       socket.off('round_end');
       socket.off('game_reset');
       socket.off('game_over');
    };
  }, []);

  const handleStartGame = () => {
      if (roomData?.id) {
          socket.emit('start_game', { roomId: roomData.id });
      }
  };

  const handlePlayAgain = () => {
      if (roomData?.id) {
          socket.emit('play_again', { roomId: roomData.id });
      }
  };

  // Determine if host (simplistic: first player in list or check creator logic if added. 
  // For now, let's assume first player in list is host? Or just allow anyone to start?
  // User asked for "admin should see button". Let's assume Room Creator is Admin.
  // We can track if this client Created the room. 
  // BUT: socket.id changes on reconnect. 
  // Let's assume first player in room.players is Host.
  const isHost = roomData?.players?.[0]?.id === socket.id;

  return (
    <div className="app">
      <InteractiveBackground />
      {!isInGame ? (
        <Lobby onJoin={(u) => setUsername(u)}/>
      ) : (
          <>
          {gameState === 'WAITING' ? (
              <WaitingRoom 
                roomId={roomData?.id} 
                players={roomData?.players || []} 
                isHost={isHost}
                onStartGame={handleStartGame}
              />
          ) : (
             <div className="wrapper">
                 {/* Header with Word/Dashes */}
                 <div className="game-header">
                     <div className="header-content">
                        {/* Left: Timer + Round Info */}
                        <div className="header-left">
                            <div className="round-badge">
                                ROUND {roundInfo?.round || 1}
                            </div>
                            <div className="timer-pill-container">
                                <div 
                                    className="timer-pill-fill" 
                                    key={gameState}
                                    style={{ 
                                        width: `${(timeLeft / maxTime) * 100}%`,
                                        backgroundColor: timeLeft > maxTime * 0.5 ? '#58CC02' : timeLeft > maxTime * 0.2 ? '#FFC107' : '#FF5252'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Center: Status */}
                        <div className="current-word">
                            {gameState === 'SELECTING_WORD' 
                                ? `${roundInfo?.drawerName || 'Drawer'} is choosing...` 
                                : (currentWord || "WAITING...")}
                        </div>

                        {/* Right: Room Info */}
                        <div className="room-info">
                            Room: {roomData?.id}
                        </div>
                     </div>
                 </div>
                 
                 <div className="game-container">
                   {/* Left: Players */}
                   <div className="sidebar-left">
                      <PlayerList 
                        roomId={roomData?.id} 
                        drawerId={roundInfo?.drawer} 
                        initialPlayers={roomData?.players || []}
                      />
                   </div>
                   
                   {/* Center: Canvas */}
                   <div className="main-content">
                      <div className="overlay-container">
                          <Canvas 
                            roomId={roomData?.id} 
                            isDrawer={isDrawer} 
                            initialHistory={roomData?.drawingHistory || []}
                          />
                          {wordOptions.length > 0 && isDrawer && (
                              <WordSelectionModal options={wordOptions} roomId={roomData?.id} />
                          )}
                          
                          {gameState === 'SELECTING_WORD' && !isDrawer && (
                              <div className="notification-overlay">
                                  <div className="notification-content">
                                      {roundInfo?.drawerName || 'Drawer'} is choosing a word...
                                  </div>
                              </div>
                          )}
                          
                          {notification && (
                              <div className="notification-overlay">
                                  <div className="notification-content">
                                      {notification.message}
                                  </div>
                              </div>
                          )}
                      </div>
                   </div>
                   
                   {/* Right: Chat */}
                   <div className="sidebar-right">
                       <Chat 
                            roomId={roomData?.id} 
                            username={username} 
                            initialMessages={roomData?.chatHistory || []}
                       />
                   </div>
                 </div>
             </div>
          )}
          
          {/* Global Countdown Overlay */}
          {countdown && (
              <div className="countdown-overlay">
                  <div className="countdown-number">{countdown}</div>
              </div>
          )}

          {gameOverStats && (
              <GameOverModal 
                players={gameOverStats} 
                isHost={isHost}
                onPlayAgain={handlePlayAgain}
              />
          )}

          </>
      )}
    </div>
  );
}

export default App;
