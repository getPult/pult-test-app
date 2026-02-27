const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<h1>Pult Test App v5</h1><p>Build cache test #2</p>");
});
server.listen(process.env.PORT || 3000);
