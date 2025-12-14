import React, { useState, useEffect } from 'react';
import socket from '../socket';
import '../App.css'; // Ensure CSS is available

function WaitingRoom({ roomId, players, isHost, onStartGame }) {
  const [copyText, setCopyText] = useState('Copy');
  
  // Game Settings State
  const [settings, setSettings] = useState({
      maxRounds: 3,
      drawTime: 60,
      maxPlayers: 8
  });

  useEffect(() => {
      // Sync settings from server
      socket.on('settings_update', (newSettings) => {
          setSettings(newSettings);
      });
      
      // Initial Sync if room data already passed? 
      // If we joined, we likely got room info in App.jsx. 
      // We could pass settings as prop, but socket sync is fine for dynamic updates.

      return () => {
          socket.off('settings_update');
      };
  }, []);

  const handleSettingChange = (key, value) => {
      if (!isHost) return;
      const newSettings = { ...settings, [key]: parseInt(value) };
      setSettings(newSettings);
      socket.emit('update_settings', { roomId, settings: newSettings });
  };

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

        {/* Game Settings Section */}
        <div className="settings-section">
            <h3>Game Settings</h3>
            <div className="settings-grid">
                
                {/* Rounds */}
                <div className="setting-item">
                    <label>Rounds</label>
                    <select 
                        value={settings.maxRounds} 
                        onChange={(e) => handleSettingChange('maxRounds', e.target.value)}
                        disabled={!isHost}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                {/* Draw Time */}
                <div className="setting-item">
                    <label>Draw & Guess Time (s)</label>
                    <input 
                        type="number"
                        min="10"
                        max="300"
                        value={settings.drawTime} 
                        onChange={(e) => handleSettingChange('drawTime', e.target.value)}
                        disabled={!isHost}
                        className="setting-input"
                    />
                </div>

                {/* Max Players */}
                <div className="setting-item">
                    <label>Max Players</label>
                    <select 
                        value={settings.maxPlayers} 
                        onChange={(e) => handleSettingChange('maxPlayers', e.target.value)}
                        disabled={!isHost}
                    >
                         <option value="2">2</option>
                         <option value="4">4</option>
                         <option value="6">6</option>
                         <option value="8">8</option>
                         <option value="12">12</option>
                    </select>
                </div>

            </div>
            {!isHost && <div className="host-control-msg">Only the host can change settings</div>}
        </div>

        <div className="players-section">
            <h3>Players Joined ({players.length}/{settings.maxPlayers})</h3>
            <div className="players-list">
                {players.map(player => (
                    <div key={player.id} className="player-item">
                        <img src={player.avatar} alt={player.username} className="player-avatar-small"/>
                        <span>{player.username} {player.id === socket.id ? '(You)' : ''} {player === players[0] ? '👑' : ''}</span>
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

export default WaitingRoom;
