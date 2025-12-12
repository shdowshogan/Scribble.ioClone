import io from 'socket.io-client';

// Connect to backend
const socket = io('https://scribble-ioclone.onrender.com');

export default socket;
