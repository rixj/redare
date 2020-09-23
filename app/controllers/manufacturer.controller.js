const Manufacturer = require("../models/manufacturer.model.js");

// Create and Save a new Manufacturer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Manufacturer
  const manufacturer = new Manufacturer({
    name: req.body.name, 
    ultimate_company: req.body.ultimate_company, 
    country_hq: req.body.country_hq
  });

  // Save Manufacturer in the database
  Manufacturer.create(manufacturer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Manufacturer."
      });
    else res.send(data);
  });
};

// Retrieve all Manufacturers from the database.
exports.findAll = (req, res) => {
  Manufacturer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving manufacturers."
      });
    else res.send(data);
  });
};

// Find a single Manufacturer with a manufacturerId
exports.findOne = (req, res) => {
  Manufacturer.findById(req.params.manufacturerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Manufacturer with id ${req.params.manufacturerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Manufacturer with id " + req.params.manufacturerId
        });
      }
    } else res.send(data);
  });
};

// Update a Manufacturer identified by the manufacturerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Manufacturer.updateById(
    req.params.manufacturerId,
    new Manufacturer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Manufacturer with id ${req.params.manufacturerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Manufacturer with id " + req.params.manufacturerId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Manufacturer with the specified manufacturerId in the request
exports.delete = (req, res) => {
  Manufacturer.remove(req.params.manufacturerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Manufacturer with id ${req.params.manufacturerId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Manufacturer with id " + req.params.manufacturerId
        });
      }
    } else res.send({ message: `Manufacturer was deleted successfully!` });
  });
};

// Delete all Manufacturers from the database.
exports.deleteAll = (req, res) => {
  Manufacturer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all manufacturers."
      });
    else res.send({ message: `All Manufacturers were deleted successfully!` });
  });
};