const express = require("express");
const bodyParser = require("body-parser");
const { produits } = require("./data");
const { personnes } = require("./data");

const PORT = 5000;
const app = express();

// pour parser form data
app.use(express.urlencoded({ extended: false }));

// pour parser json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue dans la page d'accueil");
});

// pour lister les personnes
app.get("/api/v2/personnes", (req, res) => {
  return res.json(personnes);
});

//api pour ajouter une nouvelle personne
app.post("/api/v2/personnes", (req, res) => {
  //console.log(req.body);

  const id = req.body.id;
  if (id) {
    const singlePerson = personnes.find((p) => p.id === id);

    if (singlePerson) {
      res.status(401).json("il existe une personne avec cet id " + id);
    } else {
      const nouvelUtilisateur = {
        id: id,
        name: req.body.name,
      };
      personnes.push(nouvelUtilisateur);

      return res.json({
        status: "OK",
        message: "utilisateur ajoute avec succes",
      });
    }
  } else {
		res.status(403).send("L id est obligatoire!!!")
	}
});

app.get("/api/v1/produits", (req, res) => {
  const newProducts = produits.map((product) => {
    const { id, name, price } = product;

    return { id, name, price };
  });

  res.json(newProducts);
});

app.get("/api/v1/produits/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  const singleProduct = produits.find((product) => product.id === Number(id));

  if (!singleProduct) {
    res.status(404).send("aucun produit avec id " + id);
  }

  res.json(singleProduct);
});

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
