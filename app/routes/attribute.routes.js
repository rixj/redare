module.exports = app => {
    const attributes = require("../controllers/attribute.controller.js");
  
    // Create a new Attribute
    app.post("/attribute", attributes.create);
  
    // Retrieve all Attributes
    app.get("/attribute", attributes.findAll);
  
    // Retrieve a single Attribute with attributeId
    app.get("/attribute/:attributeId", attributes.findOne);
  
    // Update a Attribute with attributeId
    app.put("/attribute/:attributeId", attributes.update);
  
    // Delete a Attribute with attributeId
    app.delete("/attribute/:attributeId", attributes.delete);
  
    // Create a new Attribute
    app.delete("/attribute", attributes.deleteAll);
  };