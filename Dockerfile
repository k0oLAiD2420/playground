# Dockerfile
# The FROM directive sets the Base Image for subsequent instructions
FROM node:8.2.0

# create app directory
RUN mkdir -p /playground
WORKDIR /playground

# install deps
COPY package.json /playground
# Install pm2 globally to utilize tools within container
RUN npm i -g pm2
RUN npm install

COPY . /playground

#Expose the port
EXPOSE 6969

CMD ["pm2", "start", "processes.json", "--no-daemon"]
