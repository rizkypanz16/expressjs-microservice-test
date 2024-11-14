# film-backend-service

## run node app
`npm run start:film`

## build docker image
`docker build -t film-list-backend-service:latest .`

## run docker container
`docker run -itd -e APP_FILM_SERVICE_URL=http://film-backend-service:5001/films --name film-list-backend-service --network film-microservice -p 5000:5000 film-list-backend-service:latest`

## delete docker container
`docker rm -f film-list-backend-service`
