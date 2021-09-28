const express = require('express');
const router = express.Router();

//importar base de datos
const database = require('./database');

//ruta de ejemplo
router.get("/", (req, res) => {
    database().catch(err => {console.log(err)});
    res.json({ message: "prueba proyecto tarea 1 arqui" });
});

module.exports = router;