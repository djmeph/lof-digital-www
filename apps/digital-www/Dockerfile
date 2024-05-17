# docker buildx build \
#     --file apps/digital-www/Dockerfile \
#     --tag ghcr.io/djmeph/lof-digital-www \
#     --platform linux/arm64,linux/amd64 \
#     --cache-to type=registry,ref=ghcr.io/djmeph/lof-digital-www:buildcache,mode=max \
#     --cache-from type=registry,ref=ghcr.io/djmeph/lof-digital-www:buildcache \
#     --push .

ARG UBUNTU_RELEASE=24.04
FROM public.ecr.aws/ubuntu/ubuntu:${UBUNTU_RELEASE}_stable AS installer

# Setup rootless user
RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 nx

# Install apt dependencies
RUN apt-get update && apt-get install -y build-essential golang gnupg2 ca-certificates && apt-get clean 

# Current release v0.9.1 March 14, 2024 includes breaking change to canonical/chisel-releases
RUN go install github.com/canonical/chisel/cmd/chisel@latest

FROM installer AS builder
ENV npm_config_build_from_source="true"
WORKDIR /staging

RUN [ "/root/go/bin/chisel", "cut", "--release", "ubuntu-24.04", \
    "--root", "/staging/", \
    "bash_bins", \
    "libstdc++6_libs" ]    

FROM node:20-alpine as nodejs
WORKDIR /src

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/* \
    && npm install -g node-gyp

# Copy package.json to /src
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
# Install node modules, cleanup yarn cache
RUN yarn workspaces focus --production

FROM scratch
ARG port=3000

COPY --from=builder /staging/ /
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group
COPY --from=nodejs /usr/local/bin/node /usr/local/bin/node
WORKDIR /src
COPY --from=nodejs /src .

COPY --chown=nx:nodejs dist/apps/digital-www .

ENV PORT ${port}
EXPOSE ${PORT}
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "$PORT"]
