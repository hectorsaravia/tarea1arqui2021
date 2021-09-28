module.exports = async function database () {

    const { Client } = require('pg');
    const client = new Client({
        password: 'base1997',
        username: 'hectors'
    });

    await client.connect();

    const res = await client.query('SELECT true;');

    console.log(res.rows[0]); // Hello world!

    await client.end();

};
