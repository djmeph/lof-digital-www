# docker buildx build \
#     --tag ghcr.io/djmeph/lof-digital-www \
#     --file apps/digital-www/Dockerfile \
#     --platform linux/arm64,linux/amd64 \
#     --cache-to type=registry,ref=ghcr.io/djmeph/lof-digital-www:buildcache,mode=max \
#     --cache-from type=registry,ref=ghcr.io/djmeph/lof-digital-www:buildcache \
#     --push .

FROM node:20-alpine as builder

RUN apk add --no-cache python3 make g++ && npm install -g node-gyp

COPY dist/apps/digital-www/package.json ./
RUN yarn install --network-timeout 300000

FROM node:20-alpine as app
ARG port=3000
USER node
ENV PORT ${port}

COPY --from=builder node_modules node_modules
COPY dist/apps/digital-www .

EXPOSE ${PORT}
CMD yarn start -p $PORT
