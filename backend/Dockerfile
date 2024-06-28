# Utiliser l'image Node.js version 16
FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "node-server/server.js"]
