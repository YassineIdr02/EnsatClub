FROM node:21-alpine

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste du code de l'application
COPY . .

# Commande pour démarrer l'application React
CMD ["npm", "start"]