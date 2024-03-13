FROM node:latest

WORKDIR usr/src/app

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]