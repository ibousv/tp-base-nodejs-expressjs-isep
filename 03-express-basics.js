const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res)=> {
	console.log("page accueil");
	res.status(200).send("Page d'accueil");
});

app.get('/about', (req, res)=> {
	console.log("page about");
	res.status(200).send("a propos de nous");
});

app.get('/contact', (req, res)=> {
	console.log("page contact");
	res.status(200).send("tel: +221 74 500 10 10");
});

app.get('/users', (req, res)=> {
	console.log("page users");
	res.status(200).send("La liste des utilisateurs");
});

app.all('*', (req, res)=> {
	res.status(404).send("<h1>page introuvable</h1>")
});

app.listen(PORT, ()=> {
	console.log('server is listening on port ' + PORT);
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen