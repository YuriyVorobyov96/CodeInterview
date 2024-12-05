# Имеется Dockerfile, необходмо объяснить значение каждой команды

FROM node:16-alpine

LABEL maintainer="example@example.com"
LABEL version="1.0"

ENV APP_HOME=/usr/src/app
ENV NODE_ENV=production

WORKDIR $APP_HOME

ADD . $APP_HOME

ARG PORT=3000

RUN npm install

USER node

EXPOSE $PORT

CMD ["npm", "start"]

ENTRYPOINT ["sh", "-c"]
