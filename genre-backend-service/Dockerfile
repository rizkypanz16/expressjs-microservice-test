FROM node:20-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN apk add --no-cache curl bash

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --silent --fail http://localhost:5002/ || exit 1

EXPOSE 5002

CMD ["npm","run", "start:genre"]
