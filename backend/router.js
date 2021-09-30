const express = require('express');
const router = express.Router();

//importar queries de base de datos
const {
    test,
    login,
    register,
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

module.exports = router;