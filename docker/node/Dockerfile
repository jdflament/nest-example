FROM node:22.15.0-alpine

RUN apk add --no-cache \
  nano \
  make \
  bash \
  bash-doc \
  bash-completion \
  py-pip \
  build-base \
  musl-dev \
  su-exec

RUN addgroup bar && \
    adduser -D -h /home -s /bin/sh -G bar foo

RUN npm install -g @nestjs/cli

WORKDIR /srv

ADD entrypoint.sh /entrypoint

RUN chmod +x /entrypoint

ENTRYPOINT ["/entrypoint"]
