#!/bin/bash

set -a
[ -f .env.dist ] && . ./.env.dist
[ -f .env ] && . ./.env
set +a

function gracefulShutdown ()
{
    docker-compose down
    docker system prune -f && docker image prune -f
    exit 2
}
trap "gracefulShutdown" 2

# Run the thing.
docker-compose down --remove-orphans
docker-compose build
docker-compose up --remove-orphans