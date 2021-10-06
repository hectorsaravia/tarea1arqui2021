const express = require('express');

//se declara la aplicación de expressjs
const app = express();

//set puerto dado en el env o por defecto en 8081
const PORT = process.env.PORT || 8081;

//pasa contenido a través de json
app.use(express.json());

//pasa contenido del tipo x-www-form-urlencoded de un  tamaño mayor al por defecto
app.use(express.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

//importar rutas
const routes = require('./router');

//denominar la ruta
app.use('/api/', routes);

//error 500 handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    return;
});

//error 400 handler
app.use( (req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//la app empieza a escuchar en el puerto declarado antes
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});