FROM node:10.16.0

WORKDIR /coffer-ui

COPY . /coffer-ui

RUN rm -rf ./node_modules

RUN npm install

CMD ["npm", "start"]



