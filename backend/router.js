const express = require('express');
const router = express.Router();

//importar queries de base de datos
const {test }= require('./queries');

//ruta de ejemplo
router.get("/test", (req, res) => {

    test(result => res.json({result: result}));

});

module.exports = router;