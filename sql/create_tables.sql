CREATE TABLE IF NOT EXISTS Usuarios (
    nombre varchar(250) NOT NULL,
    contrasena varchar(250) NOT NULL,
    PRIMARY KEY (nombre)
);
CREATE TABLE IF NOT EXISTS Comida (
    nombre varchar(250) NOT NULL,
    descripcion TEXT NOT NULL,
    rutaImagen varchar(250) NOT NULL,
    PRIMARY KEY (nombre)
);
CREATE TABLE IF NOT EXISTS Resenas (
    id INT NOT NULL,
    votacion FLOAT NOT NULL,
    descripcion TEXT NOT NULL,
    PRIMARY KEY (id)
);
