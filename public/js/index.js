var socket = io();


socket.on('connect', function(){
    console.log('Connected to server');

    
    socket.emit('createMessage', {
        from: 'Yousif',
        message: "Hello, this is a message",
        createdAt:123
    }
    )
})
socket.on('disconnect', function() {
    console.log('Disconnected from server');
})
socket.on('newMessage', function(msg){
    console.log('Hello buddy', msg);
})