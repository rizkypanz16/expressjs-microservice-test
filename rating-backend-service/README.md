# rating-backend-service

## run node app
`npm run start:film`

## build docker image
`docker build -t rating-backend-service:latest .`

## create docker network
`docker network create film-microservice`

## run docker container
`docker run -itd --name rating-backend-service -p 5003:5003 --network film-microservice rating-backend-service:latest`

## delete docker container
`docker rm -f rating-backend-service`
