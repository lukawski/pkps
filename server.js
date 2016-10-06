counter = {};

var express = require('express'),
    app = express(),
    router = express.Router(),
    http = require('http').Server(app),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    io = require('socket.io')(http),
    fs = require('fs'),
    nodemailer = require('nodemailer');

// Express config
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static('public'));

port = process.env.PORT || 3000;

// Socket
io.on('connection', function(socket) {
    io.emit('views', counter.views);
    
    socket.on('addView', function() {
        io.emit('views', ++counter.views);
    });

});

// Router
router.route('/')
.get(function(req, res) {
    res.render('home.pug');
});

router.route('/contact')
.get(function(req, res) {
    res.render('contact.pug');
})
.post(function(req, res) {
    console.log("Mail: " + req.body.mail);
    console.log("Name: " + req.body.name);
    console.log("Message: " + req.body.message);
    //Sending mail, will do later
});

router.route('/departments')
.get(function(req, res) {
   res.render('departments.pug');
});

router.route('/programs')
.get(function(req, res) {
    res.render('programs.pug');
});

app.use('/', router);

// Server
http.listen(port, function() {
    console.log('Listening on port ' + port + '...');

    var file = 'counter.json';
    fs.exists(file, function(exists) {
        if(exists) {
            fs.readFile(file, 'utf8', function(e, data) {
                if(e) throw err;
                counter = {
                    views: JSON.parse(data).views
                };
            });
        } else {
            counter = {
                views: 0
            };
        }
    });
});

// Jobs
setInterval(function() {
    fs.writeFile('counter.json', JSON.stringify(counter));
}, 1 * 60 * 1000);