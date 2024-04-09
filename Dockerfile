# https://cli.vuejs.org/guide/deployment.html#docker-nginx

FROM node:22-alpine AS build-stage
RUN apk update && apk add git

# Enable yarn 4
RUN corepack enable

ENV WORKSPACE=/home/node/app
RUN mkdir -p "$WORKSPACE/node_modules" && chown -R node:node "$WORKSPACE"
WORKDIR $WORKSPACE
USER node
COPY --chown=node:node .yarn ./.yarn
COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node .yarnrc.yml ./
RUN yarn install
COPY --chown=node:node ./ ./
RUN yarn run build

FROM nginx:1.27.5-alpine AS production-stage
RUN mkdir /app
COPY --from=build-stage /home/node/app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
