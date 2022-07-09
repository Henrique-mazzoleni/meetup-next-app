FROM node:lts-alpine
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.js ./next.config.js

COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY .env.local ./

CMD [ "npm", "run", "dev" ]