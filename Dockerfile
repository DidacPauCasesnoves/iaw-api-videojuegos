FROM node:18-alpine

RUN addgroup -S videogames && adduser -S player1 -G videogames

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN chown -R player1:videogames /app

USER player1

EXPOSE 3000

CMD ["node", "app.js"]