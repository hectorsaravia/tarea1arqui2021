# version de node mas actual para evitar errores
FROM node:14-alpine

# directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# se copian los paqueter requeridos en el directorio definido
COPY package*.json ./

# se instalan las dependencias
RUN npm install

# se copian los archivos en el directorio definido
COPY . .

# Preload dotenv
CMD ["node", "-r", "dotenv/config", "server.js"]

# se define el puerto
EXPOSE 8081

# se ejecuta el backend
CMD [ "node", "server.js" ]