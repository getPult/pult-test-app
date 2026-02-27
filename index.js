const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<h1>Pult Test App v6</h1><p>Registry cache build 1</p>");
});
server.listen(process.env.PORT || 3000);
