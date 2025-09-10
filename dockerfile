# Use an official Node.js runtime as base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project files
COPY . .

# Expose the port your app runs on (change if needed)
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]