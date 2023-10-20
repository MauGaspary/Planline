FROM node:18-alpine AS builder
WORKDIR /opt/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --ignore-optional
COPY . .
RUN ls
RUN yarn build
RUN rm -rf node_modules && yarn install --production --ignore-scripts

FROM nginx:alpine AS deploy
WORKDIR /opt/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PATH /opt/node_app/node_modules/.bin:$PATH
COPY --chown=deploy --from=builder /opt/app /opt/app

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /opt/app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

