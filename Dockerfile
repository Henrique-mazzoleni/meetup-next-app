FROM node:lts-alpine
WORKDIR /usr/src/app

COPY pack*.json ./
RUN npm ci && mv node_modules/ ../
COPY . .

CMD ["npm", "run", "dev"]