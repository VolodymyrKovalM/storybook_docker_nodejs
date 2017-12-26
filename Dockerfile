FROM node:carbon

# Create app directory
WORKDIR /app

COPY package.json /app/

RUN yarn

COPY . /app/

EXPOSE 80

CMD [ "yarn", "start-docker" ]
