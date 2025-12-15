import io from 'socket.io-client';

// Connect to backend (Local vs Prod)
const isLocal = window.location.hostname === 'localhost';
const URL = isLocal ? 'http://localhost:3000' : 'https://scribble-ioclone.onrender.com';

console.log(`🔌 Socket connecting to: ${URL}`);
const socket = io(URL);

export default socket;
