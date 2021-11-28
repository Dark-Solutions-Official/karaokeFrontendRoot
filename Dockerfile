FROM node:16.10-alpine as build-step

# Create new directory to work on
RUN mkdir -p /build

WORKDIR /build

COPY package.json /build
COPY package-lock.json /build

# Run init commands
RUN npm ci

COPY . /build

CMD ["npm", "run", "start"]

# Expose port 9000
EXPOSE 9000