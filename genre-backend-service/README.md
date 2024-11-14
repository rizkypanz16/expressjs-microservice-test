# genre-backend-service

## run node app
`npm run start:film`

## build docker image
`docker build -t genre-backend-service:latest .`

## create docker network
`docker network create film-microservice`

## run docker container
`docker run -itd --name genre-backend-service -p 5002:5002 --network film-microservice genre-backend-service:latest`

## delete docker container
`docker rm -f genre-backend-service`
