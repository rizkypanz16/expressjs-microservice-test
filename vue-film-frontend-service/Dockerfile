# build stage
FROM node:20-alpine AS build-stage

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:alpine AS production-stage

RUN apk add --no-cache curl bash

COPY --from=build-stage /app/dist /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --silent --fail http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
