FROM nginx:latest AS base

WORKDIR /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
COPY ./conf/tls.conf /etc/nginx/conf.d/tls.conf
COPY ./ssl/ /etc/nginx/ssl/

FROM base AS prod
COPY src /usr/share/nginx/html
COPY --from=homullus_node /home/node/app/build /usr/share/nginx/html/build

FROM base AS dev