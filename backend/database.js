const pg = require('pg');
const pool = new pg.Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD
    
});

module.exports = pool;