let express = require("express");
let bodyParser = require("body-parser");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.get('/comment/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(comments.find(comment => comment._id === id));
});

app.get('/products', function(req, res) {
  res.json(products);
});

app.get('/product/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(products.find(product => product._id === id));
});

app.get('/vehicles', function(req, res) {
  res.json(vehicles);
});

app.get('/vehicle/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(vehicles.find(vehicle => vehicle._id === id));
});

app.get('/contacts', function(req, res) {
  res.json(contacts);
});

app.get('/contact/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(contacts.find(contact => contact._id === id));
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
