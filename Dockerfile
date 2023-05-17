# Build stage
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/package*.json ./
RUN npm ci --only=production
COPY --from=build-stage /app/.next ./.next

EXPOSE 3000
CMD ["npm", "start"]

# Separated the build stage from the production stage \n 
# resulting in a smaller final image by excluding build-time dependencies.
