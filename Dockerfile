FROM node:20

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD ["node", "dist/main"]