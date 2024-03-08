FROM node:14.17.6-alpine3.13
MAINTAINER Zubair
WORKDIR /home/node/app
COPY package*.json ./
# Install dependencies
RUN npm install
COPY . .
# Expose the app port
EXPOSE 3000
# Start the app
CMD ["npm", "start"]
