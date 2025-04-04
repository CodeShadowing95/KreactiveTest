# README - Application d'Authentification

## Aperçu de la démo
![Demo](https://drive.google.com/file/d/1ti1Epy606X7ohLZD9NRXqU6EgwOQQ_rN/view?usp=sharing)

## Description

Cette application est une solution complète d'authentification utilisant **React** pour le frontend et **Node.js avec Express et MongoDB** pour le backend. Elle permet aux utilisateurs de se connecter et d'accéder à une page protégée uniquement après authentification.

## Technologies utilisées

### Frontend

- React
- React Router
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- Bcrypt.js (pour le hachage des mots de passe)
- CORS (gestion des requêtes cross-origin)

---

## Installation et configuration

### Prérequis

- **Node.js** installé
- **MongoDB** installé et en cours d’exécution

### 1. Cloner le dépôt

```sh
git clone https://github.com/CodeShadowing95/KreactiveTest.git
cd KreactiveTest
```

### 2. Configuration du Backend

#### a) Installation des dépendances

```sh
cd server
npm install
```

Si l'installation ne fonctionne pas avec `npm install`, vous pouvez essayer avec `npm install --legacy-peer-deps` pour forcer l'installation des dépendances.

#### b) Configuration de l’environnement

Créez un fichier `.env` dans le dossier `server` et ajoutez :

```env
PORT=3000
MONGO_URI=mongodb+srv://hwarblade:mPIAwvSyntmHwxNV@kreactivecluster.vjtuq.mongodb.net/?retryWrites=true&w=majority&appName=KreactiveCluster
JWT_SECRET=s6cr8qi
```

#### c) Lancer le serveur

```sh
npm start
```

Le serveur sera accessible sur `http://localhost:3000`.

### 3. Configuration du Frontend

#### a) Installation des dépendances

```sh
cd frontend
npm install
```

Si l'installation ne fonctionne pas avec `npm install`, vous pouvez essayer avec `npm install --legacy-peer-deps` pour forcer l'installation des dépendances.

#### b) Lancer l’application React

```sh
npm run dev
```

L’application sera accessible sur `http://localhost:5173`.

---

## Identifiants de connexion pour le test
- Email : kreactive@gmail.com
- Mot de passe : kreactive

---

## Fonctionnalités principales

- Authentification des utilisateurs avec JWT
- Stockage sécurisé des mots de passe avec bcrypt
- Redirection vers une page protégée après connexion
- Vérification du token côté serveur pour sécuriser l’accès

---

## API Endpoints

### **POST** `/login`

- **Description** : Vérifie les identifiants de l'utilisateur et retourne un token.
- **Body** : `{ email: "user@example.com", password: "password" }`
- **Response** : `{ token: "jwt_token" }`

### **GET** `/protected`

- **Description** : Renvoie un message si l'utilisateur est authentifié.
- **Headers** : `Authorization: Bearer <token>`
- **Response** : `{ message: "Vous êtes authentifié" }`

---

## Dépannage

### Erreur de connexion à MongoDB

- Vérifiez que MongoDB est bien démarré avec `mongod`.
- Vérifiez que l’URI dans `.env` est correcte.

### Erreur 401 sur `/protected`

- Assurez-vous d’inclure le token dans le header `Authorization`.
- Vérifiez que le token n’est pas expiré.