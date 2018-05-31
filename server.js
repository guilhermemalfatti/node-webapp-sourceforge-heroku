var express = require('express');
var app = express();
var db = require('./util/database');
var Q = require('q');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {    
    res.render('pages/index');
});

app.get('/contacts', function(req, res) {    
    console.log('contacts route called.');
    db.executeQuery('select * from salesforce.contact', function(result){
        res.render('pages/contacts', {contacts: result});        
    });    
});

function setupDatabaseConnection() {
    var deferred = Q.defer();
    db.createConnection(deferred.makeNodeResolver());
    return deferred.promise;
}

function setupServer(callback){
    setupDatabaseConnection().then(function(){                    
        return callback(null, 'Database Pg');
    }).catch(function(error){
        callback(error, 'DataBase Pg');
    });
}

setupServer(function(error, label){
    if (error) {
        console.info("Error on starting " + label);
        console.error(error);
    } else {
        console.info(label + ' is up');
    }
});

var port = process.env.PORT || 8080;
app.listen(port);

console.log("Http server listening on port 8080");