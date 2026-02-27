const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Preview Build v2</h1><p>PR preview with DNS!</p><p>Branch: feature/test-preview</p>");
});
server.listen(process.env.PORT || 3000, () => {
  console.log("listening on port " + (process.env.PORT || 3000));
});
