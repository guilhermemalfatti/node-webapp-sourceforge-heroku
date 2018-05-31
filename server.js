var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {    
    res.render('pages/index');
});

app.get('/contacts', function(req, res) {    
    res.render('pages/contacts');
});


var port = process.env.PORT || 8080;
app.listen(port);

console.log("Http server listening on port 8080");