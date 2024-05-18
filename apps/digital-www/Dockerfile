# docker buildx build \
#     --tag ghcr.io/djmeph/lof-digital-www \
#     --file apps/digital-www/Dockerfile \
#     --platform linux/arm64,linux/amd64 \
#     --cache-to type=registry,ref=ghcr.io/djmeph/lof-digital-www:buildcache,mode=max \
#     --cache-from type=registry,ref=ghcr.io/djmeph/lof-digital-www:buildcache \
#     --push .

FROM node:20-alpine
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
