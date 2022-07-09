FROM node:lts-alpine
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD [ "npm", "run", "dev" ]