# film-backend-service

## run node app
`npm run start:film`

## build docker image
`docker build -t film-backend-service:latest .`

## create docker network
`docker network create film-microservice`

## run docker container
`docker run -itd --name film-backend-service -p 5001:5001 --network film-microservice film-backend-service:latest`

## delete docker container
`docker rm -f film-backend-service`
