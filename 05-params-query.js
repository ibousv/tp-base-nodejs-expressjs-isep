const express = require('express');
const {produits} = require('./data');

const  PORT = 5000;
const app = express();

app.get('/api/v1/produits', (req, res) => {
	res.json(produits);
});

app.listen(PORT, ()=> {
	console.log('server listening on port ' + PORT);
});