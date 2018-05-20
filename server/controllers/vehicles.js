let Vehicle = require("../models/vehicles");

export function list(req, res) {
  Vehicle.find().then((vehicles) => {
    res.json(vehicles);
  }).catch(err => console.log(err));
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);

  Vehicle.findOne({ 'id': id }).then((vehicle) => {
    res.json(vehicle);
  }).catch(err => console.log(err));
}

export function create(req, res) {
  Vehicle.count().then((i) => {
    const vehicle = req.body;
    vehicle.id = i + 1;

    const newVehicle = new Vehicle(vehicle);

    newVehicle.save().then((vehicle) => {
      res.send(`New vehicle created: ${vehicle.body}`)
    }).catch(err => console.log(err));
  });
}
