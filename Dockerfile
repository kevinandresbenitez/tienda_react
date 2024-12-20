FROM node:18.12.0

WORKDIR /app

COPY package*.json ./
RUN yarn install 

COPY . .

EXPOSE 8080

CMD ["yarn", "start","dev"]