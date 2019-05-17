FROM node:12.2

WORKDIR /root

COPY . .

RUN yarn install

CMD ["./node_modules/.bin/nodemon", "--inspect=0.0.0.0", "server"]
