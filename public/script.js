var socket = io();

$(function() {

    $('#send').click(function() {
        socket.emit($('#command').val());
    });

});
