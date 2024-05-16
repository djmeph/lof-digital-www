ARG UBUNTU_RELEASE=24.04
FROM public.ecr.aws/ubuntu/ubuntu:${UBUNTU_RELEASE}_stable AS installer
RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 nx

# Install apt dependencies
RUN apt-get update && apt-get install -y build-essential curl gnupg2 ca-certificates golang && apt-get clean 

# Node install layer
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn node-gyp && \
    npm cache clean --force && \
    apt-get clean

# Current release v0.9.1 March 14, 2024 includes breaking change to canonical/chisel-releases
RUN go install github.com/canonical/chisel/cmd/chisel@latest

FROM installer AS builder
WORKDIR /staging
RUN [ "chisel", "cut", "--release", "ubuntu-22.04", \
    "--root", "/staging/", \
    "bash_bins", \
    "libstdc++6_libs" ]    

WORKDIR /src
# Copy package.json to /src
COPY package.json ./
# Install node modules, cleanup yarn cache
RUN yarn --prod --frozen-lockfile && yarn cache clean

FROM scratch
ARG port=3000

COPY --from=builder /staging/ /
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group
COPY --from=builder /usr/bin/node /usr/bin/node
WORKDIR /src
COPY --from=builder /src .

COPY --chown=nx:nodejs next.config.js ./
COPY --chown=nx:nodejs public ./public
COPY --chown=nx:nodejs .next ./.next
COPY --chown=nx:nodejs package.json ./package.json

ENV PORT ${port}
EXPOSE ${PORT}
CMD ["/bin/bash", "-c", "node node_modules/next/dist/bin/next start -p $PORT"]
