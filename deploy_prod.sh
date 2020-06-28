#!/bin/sh

set -a
[ -f .env ] && . ./.env.dist
[ -f .env ] && . ./.env
set +a

docker build ./node -t homullus_node --target prod
docker build ./nginx -t homullus_nginx --target prod

# Run the thing.
docker-compose down --remove-orphans
docker-compose build
docker-compose up --remove-orphans -d