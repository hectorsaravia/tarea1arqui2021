const pool = require('./database');

//funcion pa probar cosas locas
function test (result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT * FROM Users;`, function(err,results) {
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
            client.query(`SELECT * FROM Usuarios WHERE nombre=$1 AND contrasena=$2;`, 
            [data.name, data.password], function(err,results) {
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
            client.query(`INSERT INTO Usuarios(nombre,contrasena) VALUES ($1,$2);`,
            [data.name, data.password],
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

function new_resena (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`INSERT INTO Resenas (votacion,descripcion,nombre_usuario,nombre_comida)
                VALUES ($1,$2,$3,$4);`, [data.votacion, data.descripcion, data.nombre_usuario, data.nombre_comida],
                function(err, results) {
                    done();
                    if (err)
                        result(err);
                    else
                        result(results);
                }
            );
        };
    });
};

function get_resenas (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT AVG(votacion) FROM Resenas WHERE nombre_comida=$1`, [data.nombre_comida],
            function(err, results) {
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
    new_resena,
    get_resenas,
};