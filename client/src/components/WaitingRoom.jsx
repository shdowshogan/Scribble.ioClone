import React, { useState } from 'react';

function WaitingRoom({ roomId, players, isHost, onStartGame }) {
  const [copyText, setCopyText] = useState('Copy');

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setCopyText('Copied!');
    setTimeout(() => {
        setCopyText('Copy');
    }, 2000);
  };

  return (
    <div className="waiting-room-container">
      <div className="waiting-card">
        <h2>Waiting Lobby</h2>
        
        <div className="room-info-section">
          <p>Room Code:</p>
          <div className="code-display">
             <span>{roomId}</span>
             <button onClick={copyRoomId} className="copy-btn">{copyText}</button>
          </div>
        </div>

        <div className="players-section">
            <h3>Players Joined ({players.length})</h3>
            <div className="players-list">
                {players.map(player => (
                    <div key={player.id} className="player-item">
                        <img src={player.avatar} alt={player.username} className="player-avatar-small"/>
                        <span>{player.username} {player.id === socket.id ? '(You)' : ''}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="action-section">
            {isHost ? (
                <button 
                    className="start-game-btn" 
                    onClick={onStartGame}
                >
                    Start Game
                </button>
            ) : (
                <p className="waiting-msg">Waiting for host to start the game...</p>
            )}
            
        </div>
      </div>
    </div>
  );
}

// Need socket for checking ID? Actually we can pass that logic in parent or use ID from prop if available. 
// For now, let's fix the socket reference.
import socket from '../socket';

export default WaitingRoom;
