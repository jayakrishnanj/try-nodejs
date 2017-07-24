var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Nodejs CMS');
});

app.post('/add/content', function(req, res) {
    res.render('content-form.ejs');
});

app.get('/edit/:contentid/content', function(req, res) {
    res.render('storeroom.ejs', {floor: req.params.contentid});
});

app.get('/delete/:contentid/content', function(req, res) {
    var names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {counter: req.params.contentid, names: names});
});

app.get('/view/:contentid/content', function(req, res) {
    res.render('content.ejs', {floor: req.params.contentid});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page cannot be found!');
});



app.listen(8080);