# Build Stage
# ---
FROM node:18 AS builder
WORKDIR /opt/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --ignore-optional
COPY . .
RUN yarn build
RUN rm -rf node_modules && yarn install --production --ignore-scripts

# Run Stage
# ---
#FROM gcr.io/distroless/nodejs:18
#
#USER nobody
#
#COPY --chown=nobody --from=builder /opt/app /opt/app
#WORKDIR /opt/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PATH /opt/node_app/node_modules/.bin:$PATH

EXPOSE 8000

CMD ["dist/index.js"]