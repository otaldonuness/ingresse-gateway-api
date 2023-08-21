# Dockerfile
# Use the official Node.js 14 image as a base image
FROM node:latest as build

RUN useradd -m myuser
USER myuser

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the application
RUN npm run build

# Use a multi-stage build to create a lean execution image
FROM node:latest

WORKDIR /usr/src/app

# Copy build artifacts from previous stage
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/main"]
