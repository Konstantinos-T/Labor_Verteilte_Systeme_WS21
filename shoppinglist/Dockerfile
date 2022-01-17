FROM node:latest
WORKDIR /shoppinglist
COPY package.json /shoppinglist
RUN npm install 
COPY . /shoppinglist
CMD ["npm", "start"]