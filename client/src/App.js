
import './App.css';
import { io } from 'socket.io-client';
const socket = io('http://localhost:30001');
const sendMessage = () => {
  socket.emit('message', 'Hello World');
}
function App() {
  return (
    <div className="App">
      <input placeholder='Message'></input>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
