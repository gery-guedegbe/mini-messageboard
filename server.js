const express = require("express");
const path = require("path");
const app = express();

// Utilisation de body-parser pour traiter les formulaires
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Définir EJS comme moteur de templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Tableau de messages exemples
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Route d'index
app.get("/", (req, res) => {
  res.render("index", { messages, title: "Liste des messages" });
});

// Route pour afficher le formulaire de création de nouveau message
app.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Route pour traiter la soumission du formulaire et ajouter un nouveau message
app.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/"); // Rediriger vers la page d'index après soumission
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
