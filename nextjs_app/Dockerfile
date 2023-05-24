# Build stage
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN apk update && apk add --no-cache nodejs git npm python3
RUN npm install --global next
COPY . .
RUN npm run build

# Production stage
FROM node:14-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/package*.json ./
RUN npm ci --only=production
COPY --from=build-stage /app/.next ./.next

# Install AWS CLI
RUN apk --no-cache update && \
    apk --no-cache add --virtual build-deps py-pip python3-dev libffi-dev openssl-dev build-base && \
    pip3 --no-cache-dir install awscli && \
    apk --no-cache --purge del build-deps

EXPOSE 3000
CMD ["npm", "start"]

# Separated the build stage from the production stage \n 
# resulting in a smaller final image by excluding build-time dependencies.
