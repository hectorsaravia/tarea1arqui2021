const express = require('express');
const router = express.Router();

//importar queries de base de datos
const {
    test,
    login,
    register,
    new_resena,
    get_resenas,
    get_promedio_resenas,
    get_nombre_comidas,
    get_comida_detalle,
    new_comida,
    update_resena,
    update_comida,
    delete_resena,
    delete_comida
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
            res.json({message: result.rows});
        } else {
            res.json({message: false});
            console.log(result.detail);
        }
    });
});

//ruta para obtener el promedio de las resenas
router.post("/get_promedio_resenas", (req, res) => {
    const data = req.body;
    get_promedio_resenas(data, function (result) {
        if (result.rowCount > 0) {
            res.json({message: result.rows[0]});
        } else {
            res.json({message: false});
            console.log(result.detail);
        };
    });
});

//ruta para obtener todos los valores de Comida
router.get("/get_comidas", (req, res) => {
    get_nombre_comidas(function (result) {
        if (result.rowCount > 0) {
            res.json({message: result.rows});
        } else {
            res.json({message: false});
            console.log(result.detail);
        };
    });
});

//ruta para obtener todos los valores de Comida
router.post("/get_comida_detalle", (req, res) => {
    get_comida_detalle(data, function (result) {
        if (result.rowCount > 0) {
            res.json({message: result.rows});
        } else {
            res.json({message: false});
            console.log(result.detail);
        };
    });
});


//ruta para ingresar una nueva comida
router.post("/new_comida", (req, res) => {
    const data = req.body;
    new_comida(data, function(result) {
        if (result.rowCount > 0) {
            res.json({message: true});
        } else {
            res.json({message: false});
        };
    });
});

//ruta para actualizar una comida
router.put("/update_comida", (req, res) => {
    const data = req.body;
    update_comida(data, function(result) {
        if (result.rowCount > 0) {
            res.json({message: true});
        } else {
            res.json({message: false});
        };
    });
});

//ruta para actualizar una resena
router.put("/update_resena", (req, res) => {
    const data = req.body;
    update_resena(data, function(result) {
        if (result.rowCount > 0) {
            res.json({message: true});
        } else {
            res.json({message: false});
        };
    });
});

//ruta para ingresar una nueva comida
router.delete("/delete_comida", (req, res) => {
    const data = req.body;
    delete_resena(data, function(result) {
        if (result.rowCount > 0) {
            res.json({message: true});
        } else {
            res.json({message: false});
        };
    });
});

//ruta para ingresar una nueva comida
router.delete("/delete_resena", (req, res) => {
    const data = req.body;
    delete_comida(data, function(result) {
        if (result.rowCount > 0) {
            res.json({message: true});
        } else {
            res.json({message: false});
        };
    });
});

module.exports = router;