const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Pult Test App v1</h1><p>Deployed via webhook</p>");
});
server.listen(process.env.PORT || 3000, () => {
  console.log("listening on port " + (process.env.PORT || 3000));
});
