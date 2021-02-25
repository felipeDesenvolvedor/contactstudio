var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('assets'));
app.use(express.static('assets/css/posts'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/posts', function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/posts/index.html'));
});

app.listen(3000, () => {
    console.log('Listen localhost:3000');
});