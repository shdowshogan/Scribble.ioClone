import React, { useEffect, useState } from 'react';
import socket from '../socket';

function PlayerList({ roomId, drawerId, initialPlayers }) {
  const [players, setPlayers] = useState(initialPlayers || []);

  useEffect(() => {
    // Sync with initialPlayers if it changes (e.g. re-join)
    if (initialPlayers) setPlayers(initialPlayers);
  }, [initialPlayers]);

  useEffect(() => {
    socket.on('update_player_list', (playerList) => {
        // Sort by score
        const sorted = [...playerList].sort((a, b) => b.score - a.score);
        setPlayers(sorted);
    });

    socket.on('room_joined', (room) => {
         const sorted = [...room.players].sort((a, b) => b.score - a.score);
         setPlayers(sorted);
    });
    
    return () => {
        socket.off('update_player_list');
        socket.off('room_joined');
    };
  }, []);

  return (
    <div className="player-list">
      {players.map((p, i) => {
          const isDrawer = drawerId === p.id;
          const isLeader = i === 0 && p.score > 0;
          return (
              <div key={i} className={`player-card ${isDrawer ? 'is-drawer' : ''}`}>
                  <div className="player-rank">#{i+1}</div>
                  <div className="avatar">
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${p.username}`} 
                        alt={p.username} 
                      />
                  </div>
                  <div className="player-info">
                      <div className="player-name">
                          {p.username}
                          {isDrawer && <span className="icon-drawer"> ✏️</span>}
                          {isLeader && <span className="icon-leader"> 👑</span>}
                      </div>
                      <div className="player-score">{p.score} pts</div>
                  </div>
              </div>
          );
      })}
    </div>
  );
}

export default PlayerList;
