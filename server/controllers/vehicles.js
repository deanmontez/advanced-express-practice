let vehicles = require("../vehicles");

export function list(req, res) {
  res.json(vehicles);
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(vehicles.find(vehicle => vehicle._id === id));
}

export function create(req, res) {
  const vehicle = req.body;
  vehicles.push(vehicle);
  res.json(vehicles);
}
