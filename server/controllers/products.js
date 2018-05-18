let products = require("../products");

export function list(req, res) {
  res.json(products);
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(products.find(product => product._id === id));
}

export function create(req, res) {
  const product = req.body;
  products.push(product);
  res.json(products);
}
