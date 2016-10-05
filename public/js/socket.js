$(document).ready(function() {
    var socket = io();

    socket.on('views', function(views) {
        console.log('Views: ' + views);
        $('#views').text(views);
    });

    socket.on('online', function(online) {
        console.log('Online: ' + online);
        $('#online').text(online);
    });
});