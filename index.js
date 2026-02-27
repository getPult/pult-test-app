const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<h1>Pult Test App v4</h1><p>Build cache + rate limit test</p>");
});
server.listen(process.env.PORT || 3000);
