FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# VOLUME [ "/app/data" ]
EXPOSE 80
RUN npm install -g nodemon

CMD ["nodemon","--legacy-watch", "index.js"]