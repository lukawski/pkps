$(document).ready(function() {
    var socket = io();

    socket.on('views', function(views) {
        console.log('Views: ' + views);
        $('#views').append(views);
    });

    socket.on('online', function(online) {
        console.log('Online: ' + online);
        $('#online').append(online);
    });
});