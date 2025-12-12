import React from 'react';
import socket from '../socket';

function WordSelectionModal({ options, roomId }) {
  const handleSelect = (word) => {
      socket.emit('select_word', { roomId, word });
  };

  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Choose a Word!</h2>
            <div className="word-options">
                {options.map(word => (
                    <button key={word} onClick={() => handleSelect(word)} className="word-card">
                        {word}
                    </button>
                ))}
            </div>
        </div>
    </div>
  );
}

export default WordSelectionModal;
