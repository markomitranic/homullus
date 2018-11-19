#!/bin/sh

sudo cp /etc/letsencrypt/live/homullus.com/fullchain.pem nginx/ssl/
sudo cp /etc/letsencrypt/live/homullus.com/privkey.pem nginx/ssl/
sudo cp /etc/letsencrypt/options-ssl-nginx.conf nginx/ssl/
sudo cp /etc/letsencrypt/ssl-dhparams.pem nginx/ssl/

docker-compose build && docker-compose up -d
