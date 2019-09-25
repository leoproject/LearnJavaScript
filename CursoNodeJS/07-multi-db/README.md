docker run \
     --name postgres \
    -e POSTGRES_USER=leonardojs \
    -e POSTGRES_PASSWORD=leo@postgres \
    -e POSTGRES_DB=Heroes \
    -p 5432:5432 \ 
    -d \
postgres
***** valendo aqui *******
docker run \
    --name postgres \
    -e POSTGRES_USER=leo \
    -e POSTGRES_PASSWORD=leo123 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

*** Visualizar docker ***
docker ps

*** Entrar no Docker Postgres ***
docker exec -it postgres /bin/bash

*** Colocar administrador do Banco PostgreSQL ***
docker run\
   --name adminer \
   -p 8080:8080 \
   --link postgres:postgres \
   -d \
   adminer

*** Instala docker com MongoDB ***
docker run\
   --name mongodb \
   -p 27017:27017 \
   -e MONGO_INITDB_ROOT_USERNAME=admin \
   -e MONGO_INITDB_ROOT_PASSWORD=admin123 \
   -d \
   mongo:4

*** Cliente para o MongoDB ***
docker run \
   --name mongoclient \
   -p 3000:631 \
   --link mongodb:mongodb \
   -d \
   mongoclient/mongoclient

*** Entrar no Docker noo mongodb ***
docker exec -it mongodb \
    mongo --host localhost -u admin -p admin123 --authenticationDatabase admin\
    --eval "db.getSiblingDB('herois').createUser({user: 'leo', pwd:'leo123', roles:[{role: 'readWrite',db: 'herois'}]})"