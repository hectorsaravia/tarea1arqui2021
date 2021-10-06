const pg = require('pg');
const pool = new pg.Pool({
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    username: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'password',
    database: process.env.PGDATABASE || 'postgres'
});

module.exports = pool;