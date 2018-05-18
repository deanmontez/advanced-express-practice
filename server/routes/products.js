let express = require("express");
let products = require("../products");
let router = express.Router();

router.get('/products', function(req, res) {
  res.json(products);
});

router.get('/product/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(products.find(product => product._id === id));
});

router.post('/products', function(req, res) {
  const product = req.body;
  products.push(product);
  res.json(products);
});

module.exports = router;