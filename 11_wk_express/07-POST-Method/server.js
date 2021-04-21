// Modules
const http = require("http");
const fs = require("fs");
const PORT = 8080;

// Functions
function renderThankYouPage(req, res) {
  let postData = "";

  // When the server receives data
  req.on("data", (data) => {
    postData += data;
  });

  // When the request has ended
  req.on("end", () => {
    console.log(postData);
    res.end();
  });
}

function renderWelcomePage(req, res) {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Handler
const handleRequest = (req, res) => {
  const path = req.url;

  switch (path) {
    case "/thanks":
      return renderThankYouPage(req, res);

    default:
      return renderWelcomePage(req, res);
  }
};

// Server
const server = http.createServer(handleRequest);
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
