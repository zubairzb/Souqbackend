FROM node:14.17.6-slim

MAINTAINER Zubair

# Install dependencies
WORKDIR /home/node/app


# Expose the app port
EXPOSE 3000

# Start the app
CMD npm install && npm start
