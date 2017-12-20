# Dockerfile
# The FROM directive sets the Base Image for subsequent instructions
FROM ubuntu:16.04
# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
# Set environment variables
ENV appDir /var/www/app/current
# Run updates and install deps
RUN apt-get update

# Install needed deps and clean up after
RUN apt-get install -y -q --no-install-recommends \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    apt-utils \
    git \
    make \
    nginx \
    sudo \
    wget \
    && apt-get install -y iputils-ping \
    && apt-get install -y dnsutils \
    && rm -rf /var/lib/apt/lists/* \ 
    && apt-get -y autoclean

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.2.0

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Set the work directory
RUN mkdir -p /var/www/app/current
WORKDIR ${appDir}

# Add our package.json and install *before* adding our application files
ADD package.json ./
RUN npm install

# Install pm2 *globally* so we can run our application
RUN npm install -g pm2

# Add application files
ADD . /var/www/app/current

#Expose the port
EXPOSE 9150

CMD ["pm2", "start", "processes.json", "--no-daemon"]