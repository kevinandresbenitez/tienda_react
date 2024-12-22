FROM node:18.12.0

WORKDIR /app

COPY package*.json ./
COPY . .

EXPOSE 8080
