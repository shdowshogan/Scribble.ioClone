import io from 'socket.io-client';

// Connect to backend
// Automatically use the hostname (localhost or IP) to find the server
const socket = io(`http://${window.location.hostname}:3000`);

export default socket;
