FROM ubuntu:20.04 as base
WORKDIR /src
ENV DEBIAN_FRONTEND="noninteractive"

COPY .bashrc .profile .git-completion /root/

RUN apt-get update && apt-get install -y build-essential curl vim nano git unzip zip
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm i -g yarn
