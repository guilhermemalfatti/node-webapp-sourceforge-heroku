const Pool = require('pg-pool');
const url = require('url');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1]
  };

function Pg(){    
    this.pool = new Pool(config);
}

module.exports = Pg;