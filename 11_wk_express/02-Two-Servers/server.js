// Modules
const http = require("http");
const randomQuote = require("./quotes");

const PORT1 = 7000;
const PORT2 = 7500;

// Function Handlers
function requestHandler1(request, response) {
  response.end(randomQuote());
}
function requestHandler2(request, response) {
  response.end(
    `It is never too late to be what you might have been. - George Eliot`
  );
}

// Servers
const server1 = http.createServer(requestHandler1);
const server2 = http.createServer(requestHandler2);

server1.listen(PORT1, () => {
  console.log(`Server listening on port: ${PORT1}`);
});
server2.listen(PORT2, () => {
  console.log(`Server listening on port: ${PORT2}`);
});
