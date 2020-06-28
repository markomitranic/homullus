#!/bin/bash

set -a
[ -f .env ] && . ./.env.dist
[ -f .env ] && . ./.env
set +a

function gracefulShutdown ()
{
    docker-compose -f docker-compose.yml -f docker-compose-dev.yml down
    docker system prune -f && docker image prune -f
    exit 2
}
trap "gracefulShutdown" 2

docker build ./node -t homullus_node --target dev
docker build ./nginx -t homullus_nginx --target dev

# Run the thing.
docker-compose -f docker-compose.yml -f docker-compose-dev.yml down --remove-orphans
docker-compose -f docker-compose.yml -f docker-compose-dev.yml build
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --remove-orphans