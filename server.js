var express = require('express'),
    app = express(),
    router = express.Router(),
    http = require('http').Server(app),
    bodyParser = require('body-parser'),
    pug = require('pug');

// Express config
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static('public'));

port = process.env.PORT || 3000;

router.route('/')
.get(function(req, res) {
    res.render('home.pug');
});

router.route('/contact')
.get(function(req, res) {
    res.render('contact.pug');
});

app.use('/', router);
app.use('/contact', router);

http.listen(port, function() {
    console.log('Listening on port ' + port + '...');
});