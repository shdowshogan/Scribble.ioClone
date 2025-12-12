import React, { useState, useEffect, useRef } from 'react';
import socket from '../socket';

function Chat({ roomId, username }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const messageData = {
      roomId,
      author: username,
      message: input,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit('send_message', messageData);
    setInput('');
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
          {messages.map((msg, index) => (
             <div key={index} className={`message ${msg.author === username ? 'you' : 'other'} ${msg.isSystem ? 'correct-guess' : ''} ${msg.isClose ? 'close-guess' : ''}`}>
                <div className="message-content">
                   <p>{msg.message}</p>
                </div>
                {/* <div className="message-meta">
                   <p id="author">{msg.author}</p>
                   <p id="time">{msg.time}</p>
                </div> */}
             </div>
          ))}
          <div ref={messagesEndRef} />
      </div>
      <div className="chat-footer">
          <form onSubmit={sendMessage}>
             <input
                type="text"
                value={input}
                placeholder="Type a guess..."
                onChange={(e) => setInput(e.target.value)}
             />
             <button type="submit" className='send-btn'>Go</button>
          </form>
      </div>
    </div>
  );
}

export default Chat;
