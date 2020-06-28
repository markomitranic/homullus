FROM node:14-stretch-slim AS base
USER root
ENV NODE_ENV=production
WORKDIR /home/node/app/

FROM base AS prod
COPY src /home/node/app/
RUN yarn install && yarn run production

FROM base AS dev
ENV NODE_ENV=development
COPY entrypoint-dev.sh /home/node/entrypoint.sh
ENTRYPOINT ["../entrypoint.sh"]