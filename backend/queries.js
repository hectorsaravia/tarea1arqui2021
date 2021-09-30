const pool = require('./database');

//funcion pa probar cosas locas
function test (result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT * FROM users;`, function(err,results) {
                done();
                if (err)
                    result(err);
                else
                    result(results.rows);        
            });
        };
    });
};

//query para hacer login y obtener info del usuario
function login (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT * FROM users WHERE email=$1 AND password=$2 LIMIT 1;`, 
            [data.email, data.password], function(err,results) {
                done();
                if (err)
                    result(err);
                else
                    result(results);
            });
        };
    });
};

//función para hacer registro
function register (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`INSERT INTO users(email, name, lastname, password) VALUES ($1,$2,$3,$4);`,
            [data.email, data.name, data.lastname, data.password],
            function(err,results) {
                done();
                if (err)
                    result(err);
                else
                    result(results);
            });
        };
    });
};

module.exports = {
    test,
    login,
    register,
};