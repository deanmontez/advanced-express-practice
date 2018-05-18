let express = require("express");
let vehicles = require("../vehicles");
let router = express.Router();

router.get('/vehicles', function(req, res) {
  res.json(vehicles);
});

router.get('/vehicle/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(vehicles.find(vehicle => vehicle._id === id));
});

router.post('/vehicles', function(req, res) {
  const vehicle = req.body;
  vehicles.push(vehicle);
  res.json(vehicles);
});

module.exports = router;