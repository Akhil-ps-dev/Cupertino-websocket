import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <h1><i>Tinker Chat</i></h1>
      <div className="room">
      <div className="room-content">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <div className="button">
      <button onClick={joinRoom} class="btn btn-primary" > Join Room</button>
      </div>
      </div>
      </div>
      <div className="message">
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage} class="btn btn-primary"> Send Message</button>
      </div>
      <div className="output">
      <h2> Message:</h2>
      <h5>{messageReceived}</h5>
      </div>
    </div>
  );
}

export default App;