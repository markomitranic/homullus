#!/bin/sh

yarn install
yarn run production

rm -rf /app/docs/*
cp -R /app/src/index.html /app/docs/index.html
cp -R /app/src/build /app/docs/
cp -R /app/src/assets /app/docs/