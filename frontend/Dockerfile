# version de node mas actual para evitar errores
FROM node:14-alpine

# se define el directorio de trabajo
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# se copian los paquetes requeridos en el directorio definido
COPY package.json /usr/src/app/package.json

# se instalan las dependencias
RUN npm install

# se instala vue
RUN npm install -g @vue/cli

# se copian los archivos en el directorio definido
COPY . .

# se compila para produccion
RUN npm run build

# se define el puerto
EXPOSE 8080

# se ejecuta el frontend
CMD ["npm", "run", "serve"]