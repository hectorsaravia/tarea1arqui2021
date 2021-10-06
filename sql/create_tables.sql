CREATE TABLE IF NOT EXIST Usuarios (
    nombre varchar(250) NOT NULL,
    contrasena varchar(250) NOT NULL,
    PRIMARY KEY (nombre)
);
CREATE TABLE IF NOT EXIST Comida (
    nombre varchar(250) NOT NULL,
    descripcion TEXT NOT NULL,
    rutaImagen varchar(250) NOT NULL,
    PRIMARY KEY (nombre)
);
CREATE TABLE IF NOT EXIST Resenas (
    id INT NOT NULL,
    votacion FLOAT NOT NULL,
    descripcion TEXT NOT NULL,
    PRIMARY KEY (id)
);