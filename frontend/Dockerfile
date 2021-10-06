# Compilación
FROM node:14-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install

RUN npm install -g @vue/cli

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "serve"]