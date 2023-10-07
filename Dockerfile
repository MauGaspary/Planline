FROM node:18-alpine AS builder
WORKDIR /opt/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --ignore-optional
COPY . .
RUN ls
RUN yarn build
RUN rm -rf node_modules && yarn install --production --ignore-scripts

FROM node:18-alpine AS deploy

COPY --chown=deploy --from=builder /opt/app /opt/app
WORKDIR /opt/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PATH /opt/node_app/node_modules/.bin:$PATH

EXPOSE 8080

CMD ["dist/src/index.js"]
