FROM node:14-alpine

WORKDIR /usr/src/app

COPY /nextjs_app/package*.json

RUN npm install 

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000 

CMD ["npm", "start"]