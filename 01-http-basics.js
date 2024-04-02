const http = require("http");
const server = http.createServer((req, res) => {
	
	const url = req.url;
	
	// page d accueil
	if (url === '/') {
		res.writeHead(200, {'content-type': 'text/html'});
		res.write("<h1>Bienvenue à la page d'accueil</h1>");
		res.end();
	} else if(url === '/about') {
		res.writeHead(200, {'content-type': 'text/html'});
		res.write("<h1>a propos de nous</h1>");
		res.end();
	} else if (url === '/contact') {
		res.writeHead(200, {'content-type': 'text/html'});
		res.write("<h1>tel: +221 74 500 10 10</h1>");
		res.end();
	} else {
		res.writeHead(404, {'content-type': 'text/html'});
		res.write("<h1>oops! page introuvable</h1>");
		res.end();
		
	}
  //res.end("<h1>Bienvenue à la page d'accueil</h1>");
  
  //res.write('welcome  to my first nodejs app');
  //res.end();

  //res.end('welcome  to my first nodejs app');
});

server.listen(8888, "localhost", () => {
  console.log("listening on port 8888");
});
