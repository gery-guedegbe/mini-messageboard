# Mini Messageboard

Mini Messageboard est une application web simple qui permet aux utilisateurs de soumettre et d'afficher des messages. Chaque message comprend le nom de l'utilisateur, le texte du message et la date à laquelle il a été ajouté. Cette application utilise Node.js et Express.js pour le backend, avec EJS comme moteur de template pour le rendu des pages. Les messages sont stockés temporairement en mémoire sur le serveur et dans le stockage local du navigateur pour une meilleure persistance.

## Fonctionnalités

- Soumission de nouveaux messages via un formulaire
- Affichage des messages soumis avec l'utilisateur, le texte et la date
- Stockage des messages dans le local storage pour une persistance entre les sessions

## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur
- **Express.js** : Framework web pour Node.js
- **EJS** : Moteur de template pour le rendu dynamique des pages HTML
- **HTML/CSS** : Pour la structure et le style de l'application

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone <URL-du-dépôt>
   ```
2. Naviguez dans le dossier du projet :
   ```bash
   cd mini-messageboard
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Démarrez le serveur :

   ```bash
   npm start
   ```
