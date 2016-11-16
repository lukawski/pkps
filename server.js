global.counter = {}

var express = require('express'),
  app = express(),
  router = express.Router(),
  http = require('http').Server(app),
  bodyParser = require('body-parser'),
  pug = require('pug'),
  io = require('socket.io')(http),
  fs = require('fs')

// Express config
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/static', express.static('public'))

global.port = process.env.PORT || 3000

// Socket
io.on('connection', function (socket) {
  io.emit('views', counter.views)

  socket.on('addView', function () {
    io.emit('views', ++counter.views)
  })
})

// Router
router.route('/')
  .get(function (req, res) {
    res.render('home.pug')
  })

router.route('/contact')
  .get(function (req, res) {
    res.render('contact.pug')
  })

router.route('/departments')
  .get(function (req, res) {
    res.render('departments.pug')
  })

router.route('/programs')
  .get(function (req, res) {
    res.render('programs.pug')
  })

router.route('/actions')
  .get(function (req, res) {
    res.render('actions.pug')
  })

router.route('/mozesz-pomoc')
  .get(function (req, res) {
    res.render('mozesz-pomoc.pug')
  })

app.use('/', router)

// Server
http.listen(port, function () {
  console.log('Listening on port ' + port + '...')

  var file = 'counter.json';
  fs.exists(file, function (exists) {
    if (exists) {
      fs.readFile(file, 'utf8', function (e, data) {
        if (e) throw err
        counter = {
          views: JSON.parse(data).views
        };
      });
    } else {
      counter = {
        views: 0
      }
    }
  })
})

// Jobs
setInterval(function () {
  fs.writeFile('counter.json', JSON.stringify(counter))
}, 1 * 60 * 1000)
