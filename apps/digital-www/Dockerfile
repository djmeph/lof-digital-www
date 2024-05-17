FROM node:20-alpine as nodejs
ARG port=3000
WORKDIR /src

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/* \
    && npm install -g node-gyp

COPY dist/apps/digital-www/package.json ./
RUN yarn install
COPY --chown=node:node dist/apps/digital-www .

USER node
ENV PORT ${port}
EXPOSE ${PORT}
CMD yarn start -p $PORT
