var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use('/', express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());

var posts = [];

app.get('/api/posts', function(req, res) {
    res.send(posts);
});

app.post('/api/post', function(req, res) {
    console.log(req.body);
    posts.push(req.body)
    res.send('OK');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});