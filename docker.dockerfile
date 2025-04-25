FROM node:16

WORKDIR /app
COPY indexer.js .
COPY indexer.test.js .
COPY .env .

RUN npm install web3 express sqlite3 mocha chai

CMD ["node", "indexer.js"]