const http = require("http");
const { readFileSync } = require("fs");

const PORT = 8888;

//lire tous les fichiers du dossier template
const homePage = readFileSync("./template/index.html");
const aboutPage = readFileSync("./template/about.html");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutPage);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>tel: +221 74 500 10 10</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>oops! page introuvable</h1>");
    res.end();
  }
});

server.listen(PORT, 'localhost', ()=> {
	console.log(`server listening on port ${PORT}...`);
})
