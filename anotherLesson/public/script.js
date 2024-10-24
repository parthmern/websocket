var socket = io();

let btn = document.getElementById("btn");
btn.onclick = function exec(){
    console.log("clicked btn");
    socket.emit('from_client', {key:"world"})
}


socket.on('from_server', (msg)=>{
    console.log("collected new event from_server", msg);
    const div = document.createElement('div');
    div.innerText =  'new event from servrer';
    document.body.appendChild(div);
})


let btnn = document.getElementById("btnn");
let newmsg = document.getElementById("newmsg");
let msgList = document.getElementById("msgList");

btnn.onclick = function sendingMsg(){

    console.log("sent msg");
    socket.emit('msg_send', {
        msg : newmsg.value
    });

}


socket.on('msg_rcvd', (data)=>{
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})