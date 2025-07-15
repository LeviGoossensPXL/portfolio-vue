# Step 1: Build Vue app
FROM node:18 AS build

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . .
RUN npm run build  # This outputs to /app/dist by default

# Step 2: Create final container with Nginx and json-server
FROM node:18

# Install nginx
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install json-server
COPY package.json ./
RUN npm install

# Copy static frontend and api
COPY --from=build /app/dist /frontend
COPY db.json /db.json
COPY nginx/default.conf /etc/nginx/sites-available/default
COPY ./run.sh /run.sh

# Make the shell script executable
RUN chmod +x /run.sh

# Expose port
EXPOSE 80

# Start everything
CMD ["/run.sh"]
