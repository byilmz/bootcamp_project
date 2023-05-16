# using node alpine's official image 
FROM node:14-alpine

# setting the cwd in the container
WORKDIR /usr/src/app

# copying package.json file 
COPY /nextjs_app/package*.json

# installing dependencies
RUN npm install 

# copy everything in same cwd as Dockerfile
COPY .

# building the application
RUN npm run build

# setting the environment variable
ENV NODE_ENV=production

# expose port 3000 for NextJS application
EXPOSE 3000 

# run app
CMD ["npm", "start"]