const { ClientBase } = require('pg');
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

//función para insertar nuevas reseñas
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

//función para obtener todas las reseñas de una comida exacta
function get_resenas (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT * FROM Resenas WHERE nombre_comida=$1;`, [data.nombre_comida],
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

//función para obtener una reseña de una comida exacta
function get_resena_detalle (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT * FROM Resenas WHERE id=$1;`, [data.id],
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

//función para obtener el promedio de todas las reseñas
function get_promedio_resenas (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT AVG(votacion) FROM Resenas WHERE nombre_comida=$1;`, [data.nombre_comida],
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

//funcion para obtener los valores todas las comidas de la base
function get_nombre_comidas (result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT * FROM Comida;`, function(err, results) {
                done();
                if (err)
                    result(err);
                else
                    result(results);
            });
        };
    });
};

//funcion para obtener una comida en especifico
function get_comida_detalle (data,result) {
    console.log(data);
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`SELECT * FROM Comida WHERE nombre=$1;`, [data.nombre_comida],
            function(err, results) {
                done();
                if (err)
                    result(err);
                else
                    result(results);
            });
        };
    });
}

//función para insertar una nueva comida
function new_comida (data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`INSERT INTO Comida(nombre,descripcion,rutaImagen) VALUES($1,$2,$3)`,
            [data.nombre,data.descripcion,data.rutaImagen],
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


//función para actualizar reseñas
function update_resena(data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);
        } else {
            client.query(`UPDATE Resenas SET votacion=$1,descripcion=$2 WHERE id=$3;`,
            [data.votacion, data.descripcion, data.id], function (err,results) {
                done();
                if (err)
                    result(err);
                else
                    result(results);
            });
        };
    });
};

//función para actualizar comida
function update_comida(data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);            
        } else {
            client.query(`UPDATE Comida SET nombre=$1 AND descripcion=$2 AND rutaImagen=$3`,
            [data.nombre, data.descripcion, data.rutaImagen] ,
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

//función para eliminar comida
function delete_comida(data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);            
        } else {
            client.query(`DELETE FROM Comida WHERE nombre=$1;`, [data.nombre_comida], 
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

//función para eliminar resenas
function delete_resena(data,result) {
    pool.connect(function(err, client, done) {
        if (err) {
            done();
            result(err);            
        } else {
            client.query(`DELETE FROM Resenas WHERE id=$1;`, [data.id], 
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
    new_resena,
    get_resenas,
    get_resena_detalle,
    get_promedio_resenas,
    get_nombre_comidas,
    get_comida_detalle,
    new_comida,
    update_resena,
    update_comida,
    delete_resena,
    delete_comida
};