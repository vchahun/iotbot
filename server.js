var express = require('express');
var http = require('http');
var app = express()
var server = http.Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
app.use(express.static('bower_components'));

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('hello', function() {
        console.log('world');
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

});


server.listen(4000, function() {
    console.log('listening on *:4000');
});
