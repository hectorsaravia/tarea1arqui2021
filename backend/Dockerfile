FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Preload dotenv
CMD ["node", "-r", "dotenv/config", "server.js"]

EXPOSE 8081
CMD [ "node", "server.js" ]