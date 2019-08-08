FROM node:12-alpine
WORKDIR /usr/src/app
COPY package-node.json ./package.json
RUN yarn install
COPY app.js .
COPY dist ./dist
CMD [ "node", "app.js" ]
