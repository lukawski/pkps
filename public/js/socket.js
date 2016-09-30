$(document).ready(function() {
    var socket = io();

    socket.on('views', function(views) {
        console.log('Views: ' + views);
    });

    socket.on('online', function(online) {
        console.log('Online: ' + online);
    });
});