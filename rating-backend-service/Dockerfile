FROM node:20-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN apk add --no-cache curl bash

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --silent --fail http://localhost:5003/ || exit 1

EXPOSE 5003

CMD ["npm","run", "start:rating"]
