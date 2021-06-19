var express = require('express');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
