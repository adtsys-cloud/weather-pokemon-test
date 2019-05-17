FROM node:12.2

WORKDIR /root

COPY . .

RUN yarn install

ENV SECRET_KEY b06a804140083c487dde620ea2285156f5dd895d3027674383e825ffeeb12fd81d07617ad99407e4b17add96697af8deb75dd162aa7ff98d627a091c08b316c7
ENV PORT 5000

CMD ["./node_modules/.bin/nodemon", "--inspect=0.0.0.0", "server"]

# Heroku
# ENV PORT 80
# CMD ["node", "server"]
