const express = require('express');
const router = express.Router();

//importar queries de base de datos
const {
    test,
    login,
    register,
    new_resena,
    get_resenas
} = require('./queries');

//ruta de ejemplo
router.get("/test", (req, res) => {
    test(function (result) {
        res.json({result: result})
    });

});

//ruta de login
router.post("/login", (req, res) => {
    const data = req.body;
    login(data, function (result) {
        if (result.rowCount > 0) {
            res.json({message: result.rows[0]});
        } else {
            res.json({message: false});
        };
    });
});

//ruta de registro
router.post("/registro", (req, res) => {
    const data = req.body;
    register(data, function (result) {
        if (result.rowCount > 0) {
            res.json({message: true});
        } else {
            res.json({message: false});
            console.log(result.detail);
        }
    });
});

//ruta para ingresar resena
router.post("/new_resena", (req, res) => {
    const data = req.body;
    new_resena(data, function (result) {
        if (result.rowCount > 0) {
            res.json({message: true});
        } else {
            res.json({message: false});
            console.log(result.detail);
        }
    });
});

//ruta para obtener resenas
router.post("/get_resenas", (req, res) => {
    const data = req.body;
    get_resenas(data, function (result) {
        if (result.rowCount > 0) {
            res.json({message: result.rows[0]});
        } else {
            res.json({message: result});
            console.log(result.detail);
        }
    });
});

module.exports = router;