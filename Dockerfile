FROM node:20-bullseye-slim as base

WORKDIR /app

RUN apt-get update -qq && \
  apt-get install --no-install-recommends -y build-essential node-gyp openssl pkg-config
# apt-get install --no-install-recommends -y build-essential node-gyp openssl pkg-config ca-certificates

COPY --link . .

RUN npm install -ci

CMD [ "node", "--env-file=.env", "index.js"]
