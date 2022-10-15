
import './App.css';
import  io  from 'socket.io-client';
import { useEffect, useState} from "react";
import React from 'react';
const socket = io.connect('http://localhost:3001');


function App() {

const [message, setMessage] = useState("")
const [messageReceived, setMessageReceived] =  useState("")
const sendMessage = ( ) => {
 socket.emit("send_message", { message });

};
useEffect (() =>{
socket.on("receive_message", (data) => {
  setMessageReceived(data.message);
});
}, [socket]);

  return (
    <div className="App">
      <input placeholder='Message' onChange={(event)=>{
        setMessage(event.target.value);
      }}></input>
      <button onClick={sendMessage}>Send Message</button>
      <div>
        <h1>{messageReceived}</h1>
      </div>
    </div>
  );
  
}

export default App;
