# websocket

## webSocket
- one communication protocol ( http, ftp, smtp, ssh like protocols )
- Http - one way communication here if client send req then server can give response ... without sending req from client, server cannot send res
- webSocket - duplex communication between client and server - here one connection establish between client and server and here server can send anything to client without req - ex. notification push - here client can also send anytime

## Socket.io 
- one library for web socket
### How it is working ?
- here assume that there is one circuit in the server and if any client make connection so that client is the part of that circuit and that circuit is known as IO
- here IO means all clients that are available in the circuit means entire circuit
- SOCKET means individual client and each client/socket has its own id
<br/>

- `emit` means triggering event here `emit this event (data)` --> sending data
- `on` like listener here `on this event (data)` --> receving data

<br/>  
- `broadcast` - this event(data)
- `to` - to trigger event for particular sub room

## Installation
- in server `npm i socket.io`
- in client `npm i socket.io-client`

# [Imp vid](https://youtu.be/_h7Pc1woq-I?si=cbwRTczY04Ah5yNK)
