FROM ubuntu:24.04
WORKDIR /src
ENV DEBIAN_FRONTEND="noninteractive"
ENV YARN_NODE_LINKER="node-modules"

COPY .bashrc .profile .git-completion /root/

RUN apt-get update && apt-get install -y apt-transport-https build-essential curl vim nano git git-lfs unzip zip ca-certificates gnupg2 software-properties-common python3

# node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && npm i -g yarn node-gyp

# Docker CLI
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null \
  && apt-get update \
  && apt-get install -y docker-ce
