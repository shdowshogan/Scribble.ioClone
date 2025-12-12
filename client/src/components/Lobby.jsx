import React, { useState } from 'react';
import socket from '../socket';

function Lobby({ onJoin }) {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const [avatarSeed, setAvatarSeed] = useState(Math.random().toString());

  const generateRoomId = () => Math.random().toString(36).substring(2, 8).toUpperCase();
  const getAvatarUrl = (seed) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;

  const handleRandomize = () => {
       const randomNames = ["FunnyCat", "SpeedyDog", "HappyTree", "CoolBean", "SillyGoose", "MegaMind", "PixelArt", "Sketchy"];
       const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
       const randomSeed = Math.random().toString();
       setUsername(randomName);
       setAvatarSeed(randomSeed);
  };

  const cycleAvatar = () => {
      setAvatarSeed(Math.random().toString());
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!username) return alert("Please enter a name!");
    const newRoomId = generateRoomId();
    const avatar = getAvatarUrl(avatarSeed);
    socket.emit('join_room', { username, roomId: newRoomId, avatar });
    onJoin(username); // Optimistic update
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (!username || !roomId) return alert("Please enter name and room ID!");
    const avatar = getAvatarUrl(avatarSeed);
    socket.emit('join_room', { username, roomId, avatar });
    onJoin(username);
  };

  return (
    <div className="lobby-container">
      <h1 className="game-title">Scribbl.io Clone</h1>
      
      <div className="lobby-card">
          {/* Avatar Selection Area */}
          <div className="avatar-selection">
              <button className="arrow-btn" onClick={cycleAvatar}>◀</button>
              <div className="avatar-preview">
                  <img src={getAvatarUrl(avatarSeed)} alt="avatar" />
              </div>
              <button className="arrow-btn" onClick={cycleAvatar}>▶</button>
          </div>
          <button className="randomize-btn" onClick={handleRandomize}>🎲 Randomize</button>

          {!isJoining ? (
              /* Main Menu */
              <div className="menu-buttons">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="name-input"
                  />
                  <div className="actions">
                      <button onClick={handleCreate} className="create-btn">Create Private Room</button>
                      <button onClick={() => setIsJoining(true)} className="join-btn">Join Room</button>
                  </div>
              </div>
          ) : (
              /* Join Menu */
              <form onSubmit={handleJoin} className="lobby-form">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="name-input"
                />
                
                {/* <p className='room-id-text'>Enter Room ID to Join:</p> */}
                {/* <p className='room-id-text'>Enter Room ID to Join:</p> */}
                <div className="room-code-container">
                    <input
                      type="text"
                      maxLength={6}
                      value={roomId}
                      onChange={(e) => setRoomId(e.target.value.toUpperCase())}
                      className="room-code-hidden-input"
                      autoFocus
                    />
                    <div className="room-code-display">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={`code-digit ${roomId[i] ? 'filled' : ''}`}>
                                {roomId[i] || '_'}
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="actions">
                    <button type="submit" className="play-btn">Play!</button>
                    <button type="button" onClick={() => setIsJoining(false)} className="back-btn">Cancel</button>
                </div>
              </form>
          )}
      </div>
    </div>
  );
}

export default Lobby;
