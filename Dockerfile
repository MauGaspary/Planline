FROM node:18-alpine

COPY . .
RUN npm i yarn
RUN yarn install
