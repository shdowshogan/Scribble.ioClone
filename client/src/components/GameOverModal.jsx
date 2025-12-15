import React from 'react';
import '../App.css'; // Using App.css for styles

const GameOverModal = ({ players, isHost, onPlayAgain }) => {
    // players is an array sorted by score desc
    return (
        <div className="global-overlay">
            <div className="game-over-modal funky-animate">
                <h1 className="funky-title">GAME OVER!</h1>
                
                <div className="podium">
                    {players.slice(0, 3).map((p, index) => (
                        <div key={p.id} className={`podium-step step-${index + 1}`}>
                            <div className="rank">#{index + 1}</div>
                            <img src={p.avatar} alt="avatar" className="winner-avatar"/>
                            <div className="winner-name">{p.username}</div>
                            <div className="winner-score">{p.score} pts</div>
                        </div>
                    ))}
                </div>

                <div className="leaderboard-list">
                    {players.slice(3).map((p, index) => (
                        <div key={p.id} className="list-item">
                            <span className="rank-small">#{index + 4}</span>
                            <span className="name-small">{p.username}</span>
                            <span className="score-small">{p.score}</span>
                        </div>
                    ))}
                </div>

                {isHost ? (
                    <button className="funky-btn" onClick={onPlayAgain}>
                        Play Again
                    </button>
                ) : (
                    <div className="waiting-msg">Waiting for host to play again...</div>
                )}
            </div>
        </div>
    );
};

export default GameOverModal;
