#!/bin/bash

docker run \
    --name homullus \
    -v $(pwd)/docs:/usr/share/nginx/html:ro \
    --name homullus \
    -p 80:80 \
    -it --rm nginx:alpine