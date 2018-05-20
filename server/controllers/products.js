let Product = require("../models/products");

export function list(req, res) {
  Product.find().then((products) => {
    res.json(products);
  }).catch(err => console.log(err));
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);

  Product.findOne({ 'id': id }).then((product) => {
    res.json(product);
  }).catch(err => console.log(err));
}

export function create(req, res) {
  Product.count().then((i) => {
    const product = req.body;
    product.id = i + 1;

    const newProduct = new Product(product);

    newProduct.save().then((product) => {
      res.send(`New product created: ${product.body}`)
    }).catch(err => console.log(err));
  });
}
