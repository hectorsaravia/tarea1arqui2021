const pg = require('pg');
const pool = new pg.Pool({
    password: 'base1997',
    username: 'hectors'
});

module.exports = pool;