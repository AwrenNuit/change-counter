const pg = require('pg');
const url = require('url');
const config = {};

if(process.env.DATABASE_URL){
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true,
    max: 10,
    idleTimeoutMillis: 30000
  };
}
else {
  config = {
    host: `localhost`,
    port: 5432,
    database: `change_counter`,
    max: 10,
    idleTimeoutMillis: 30000
  };
}

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Postgesql connected');
});

pool.on('error', (err) => {
  console.log('Error connecting to Postgresql', err);
  process.exit(-1);
});

module.exports = pool;