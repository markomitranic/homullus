FROM nginx:latest AS base

RUN apt-get update
RUN apt-get install nano

RUN rm /etc/nginx/conf.d/*
COPY conf/ /etc/nginx/conf.d
COPY ssl /etc/nginx/ssl
WORKDIR /usr/share/nginx/html

FROM base AS prod
COPY conf/homullus-prod.conf /etc/nginx/conf.d/homullus.conf

FROM base AS dev
COPY conf/homullus-dev.conf /etc/nginx/conf.d/homullus.conf
