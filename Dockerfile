FROM ubuntu:22.04

RUN apt update && apt install -y nodejs && apt install -y npm

WORKDIR /messenger

COPY ./dist/ dist

COPY ./src/app.js app.js
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

RUN npm install

EXPOSE 3000

CMD node app.js
