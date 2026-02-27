const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Preview Build</h1><p>This is a PR preview deployment!</p><p>Branch: feature/test-preview</p>");
});
server.listen(process.env.PORT || 3000, () => {
  console.log("listening on port " + (process.env.PORT || 3000));
});
