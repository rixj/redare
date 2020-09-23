module.exports = app => {
    const manufacturer = require("../controllers/manufacturer.controller.js");
  
    // Create a new Manufacturer
    app.post("/manufacturer", manufacturer.create);
  
    // Retrieve all Manufacturers
    app.get("/manufacturer", manufacturer.findAll);
  
    // Retrieve a single Manufacturer with manufacturerId
    app.get("/manufacturer/:manufacturerId", manufacturer.findOne);
  
    // Update a Manufacturer with manufacturerId
    app.put("/manufacturer/:manufacturerId", manufacturer.update);
  
    // Delete a Manufacturer with manufacturerId
    app.delete("/manufacturer/:manufacturerId", manufacturer.delete);
  
    // Create a new Manufacturer
    app.delete("/manufacturer", manufacturer.deleteAll);
  };