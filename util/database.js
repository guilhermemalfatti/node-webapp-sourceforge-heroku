var Pg = require('./pg.js');
var pool = null;

exports.getConnection = function(){
    return pool;
};

exports.createConnection = function(callback){
    pool = new Pg().pool;

    pool.connect().then(client => {
        client.release();
        callback(null);
    }).catch(e => {        
        callback(e.message);
        console.error('query error', e.message, e.stack);
        client.release();
    })

};

exports.executeQuery = function(query, callback){
    pool.query(query, function (err, res) {
        if(err){
            console.log(err);
        }else{            
            callback(res.rows);
        }
    })
};