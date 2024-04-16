const express = require('express');
const {produits} = require('./data');

const  PORT = 5000;
const app = express();

app.get('/api/v1/produits', (req, res) => {
	const newProducts = produits.map((product) => {
		const {id, name, price} = product;

		return {id, name, price};
	})
	
	res.json(newProducts);
});

app.get('/api/v1/produits/:id', (req, res) => {
	const id = req.params.id
	console.log(id);
	
	const singleProduct = produits.find((product)=> product.id === Number(id));
	
	if (!singleProduct) {
		res.status(404).send("aucun produit avec id " + id)
	}
	
	res.json(singleProduct);
});

app.listen(PORT, ()=> {
	console.log('server listening on port ' + PORT);
});