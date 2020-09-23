const Attribute = require("../models/attribute.model.js");

// Create and Save a new Attribute
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Attribute
  const attribute = new Attribute({
    category: req.body.category, 
    model_criteria: req.body.model_criteria, 
    label: req.body.label, 
    links: req.body.links
  });

  // Save Attribute in the database
  Attribute.create(attribute, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Attribute."
      });
    else res.send(data);
  });
};

// Retrieve all Attributes from the database.
exports.findAll = (req, res) => {
  Attribute.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving attributes."
      });
    else res.send(data);
  });
};

// Find a single Attribute with a attributeId
exports.findOne = (req, res) => {
  Attribute.findById(req.params.attributeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Attribute with id ${req.params.attributeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Attribute with id " + req.params.attributeId
        });
      }
    } else res.send(data);
  });
};

// Update a Attribute identified by the attributeId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Attribute.updateById(
    req.params.attributeId,
    new Attribute(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Attribute with id ${req.params.attributeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Attribute with id " + req.params.attributeId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Attribute with the specified attributeId in the request
exports.delete = (req, res) => {
  Attribute.remove(req.params.attributeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Attribute with id ${req.params.attributeId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Attribute with id " + req.params.attributeId
        });
      }
    } else res.send({ message: `Attribute was deleted successfully!` });
  });
};

// Delete all Attributes from the database.
exports.deleteAll = (req, res) => {
  Attribute.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all attributes."
      });
    else res.send({ message: `All Attributes were deleted successfully!` });
  });
};