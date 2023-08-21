# Build Stage
FROM node:latest as build

# Create a user to avoid running as root
RUN useradd -m myuser

# Create a directory for global npm packages
ENV NPM_PACKAGES="/home/myuser/.npm-packages"
RUN mkdir -p $NPM_PACKAGES && chown myuser:myuser $NPM_PACKAGES

# Set environment paths to include the new npm packages directory
ENV PATH="$NPM_PACKAGES/bin:$PATH"
ENV NPM_CONFIG_PREFIX=$NPM_PACKAGES

USER myuser

# Install pnpm globally in the custom directory
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install dependencies by copying package-related files first
COPY pnpm-lock.yaml package.json ./
RUN pnpm install

# Copy the rest of the code
COPY . .

# Build the application
RUN pnpm run build

# Execution Stage
FROM node:latest

WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the necessary files from previous stage
COPY --from=build /usr/src/app/dist ./dist
COPY package.json ./

# Install production dependencies
RUN pnpm install --prod

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/main"]
