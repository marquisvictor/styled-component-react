FROM node:14.15.0-alpine

WORKDIR /App

# install app dependencies

COPY package.json /App/

RUN yarn

COPY . /App/

CMD ["yarn", "start"]