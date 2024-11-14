# vue-film-frontend-service

## run node app
`npm run serve --host 0.0.0.0`

## build docker image
`docker build -t vue-film-frontend-service .`

## create docker network
`docker network create film-microservice`

## run docker container
`docker run -itd -p 80:80 --name vue-film-frontend-service --network film-microservice vue-film-frontend-service:latest`

## delete docker container
`docker rm -f vue-film-frontend-service`
