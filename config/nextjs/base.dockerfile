FROM node:18-bullseye-slim

ENV DOCKER true

# Installed apps
USER root
RUN apt update \
    && apt install -y \
    gcc \
    libmariadb-dev \
    zsh \
    vim \
    exa \
    bat
ENV SHELL /bin/zsh

WORKDIR /root
RUN npm update -g npm

# Logging in as a rootless user
ARG UID=1001
ARG GID=1001
RUN useradd -l -u $UID -o -m rootless \
    && groupmod -g $GID -o rootless
USER rootless

WORKDIR /home/rootless/src
COPY  --chown=rootless:rootless src/package.json ./
RUN npm install

COPY --chown=rootless:rootless config/common/base.zshenv ../.zshenv
COPY --chown=rootless:rootless config/common/base.zshrc ../.zshrc
COPY --chown=rootless:rootless src/next.config.js ./
COPY --chown=rootless:rootless src/jsconfig.json ./

WORKDIR /home/rootless/src/src
