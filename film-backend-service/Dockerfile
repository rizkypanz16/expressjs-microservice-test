FROM node:20-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN apk add --no-cache curl bash

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --silent --fail http://localhost:5001/ || exit 1

EXPOSE 5001

CMD ["npm","run", "start:film"]
