FROM node:alpine

WORKDIR /usr/app/todo-list

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn" "start"]
