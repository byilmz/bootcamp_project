# Build stage
FROM node:14-alpine
WORKDIR /app
# COPY package*.json ./
# RUN apk update && apk add --no-cache nodejs git npm python3
# RUN npm install --global next
RUN apk update && apk add --no-cache curl jq wget unzip
RUN wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip && \
    unzip ngrok-stable-linux-amd64.zip && \
    rm ngrok-stable-linux-amd64.zip && \
    chmod +x ngrok
COPY . .
RUN npm install
RUN npm run build
RUN 

# Production stage
# FROM node:14-alpine as production-stage
# WORKDIR /app
# COPY --from=build-stage /app/package*.json ./
# RUN npm ci --only=production
# COPY --from=build-stage /app/.next ./.next
# COPY --from=build-stage /app/node_modules ./node_modules

# Install AWS CLI
RUN apk --no-cache update && \
    apk --no-cache add --virtual build-deps py-pip python3-dev libffi-dev openssl-dev build-base && \
    pip3 --no-cache-dir install awscli && \
    apk --no-cache --purge del build-deps

EXPOSE 3000
CMD ["npm", "start"]

# Separated the build stage from the production stage \n 
# resulting in a smaller final image by excluding build-time dependencies.
