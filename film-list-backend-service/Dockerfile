FROM node:20-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:5000/ || exit 1

EXPOSE 5000

CMD ["npm","run", "start:film-list"]
