const express = require('express');
const path = require('path');
const {produits} = require('./data');

const PORT = 5000;
const app = express();

app.use(express.static('./public'));
app.get('/', (req, res) => {
	const filePath = path.resolve(__dirname, './navbar-app/index.html');
	
	res.sendFile(filePath);
});

app.get('/produits', (req, res) => {
	//res.status(200).send(produits);
	
	res.status(200).json(produits);
});

app.listen(PORT, ()=> {
	console.log('server is listening on port ' + PORT);
})
