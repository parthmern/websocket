import React, { useEffect, useMemo, useState } from 'react'
import {io} from "socket.io-client"

// if we are not going to use useMemo then we can put here
//const socket = io("http://localhost:4000");

export const App = () => {

  const [text, setText] = useState();
  const [socketId, setSocketId] = useState();
  const [roomId, setRoomId] = useState();

  //here rerendered everytime while we putting anything in input and 
  // in input we are using usestate text value so because of usestate updation rerender of whole component happens
  // but we need that socket is rendered only one time and it should be global variable so useMemo
  
  console.log("component rerednerd");
  const socket = useMemo(()=>{
    return io("http://localhost:4000")
  }, [])
  // in useEffct without state var we cannot assign value to variable of outside
  // we can do it in useMemo

  useEffect(()=>{
    
    console.log("useeff run");
    socket.on("connect", ()=>{
      console.log("connected with id", socket.id);
      setSocketId(socket.id);
    })

    socket.on("emit", (data)=> {
      console.log(data);
    })

    // receving emitted from server
    socket.on("rcv-data", (data)=> {
      console.log(data);
    })

    socket.on("roommsg",(data)=>{
      console.log("secretmsg", data);

    })

    return ()=>{
      socket.disconnect() ;
    }

  },[]);
  
  function handleSubmit(e){
    console.log("called");
    e.preventDefault();
    
    //socket.emit("msg", text);

    const msg = {
      room : roomId ,
      data : text ,
    }

    socket.emit("secretmsg", msg);

  }
  

  return (
    <div>
      <div>
        socket id {socketId}
      </div>
      <label>Room id =</label>
      <input onChange={(e)=>{
          setRoomId(e.target.value);
        }} value={roomId}></input>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>{
          setText(e.target.value);
        }} value={text}></input>
        <button type='submit'>submit</button>
      </form>

        <div>
          
        </div>

    </div>
  )
}
