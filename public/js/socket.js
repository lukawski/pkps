/* global $, io, Cookies */

$(document).ready(function () {
  var socket = io()

  if (!Cookies.get('viewed')) {
    Cookies.set('viewed', true, { expires: 0.1 })
    socket.emit('addView')
  }

  socket.on('views', function (views) {
    console.log('Views: ' + views)
    $('#views').text(views)
  })
})
