# Étape 1 : Utilisation de l'image de Node.js pour construire l'application Angular
FROM node:16
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build -- --configuration=production

# Étape 2 : Utilisation de l'image Nginx pour servir l'application construite
FROM nginx:alpine
COPY frontend/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/projet-final /usr/share/nginx/html
EXPOSE 80

# Démarrage du serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
