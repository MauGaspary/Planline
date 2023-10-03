FROM node:18-alpine

WORKDIR /app
COPY package.json .
RUN npm i yarn
RUN yarn install --immutable --immutable-cache --check-cache
COPY . .
EXPOSE 8080