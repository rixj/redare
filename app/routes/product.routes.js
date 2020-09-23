module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    // Create a new Product
    app.post("/product", products.create);
  
    // Retrieve all Products
    app.get("/product", products.findAll);
  
    // Retrieve a single Product with productId
    app.get("/product/:productId", products.findOne);
  
    // Update a Product with productId
    app.put("/product/:productId", products.update);
  
    // Delete a Product with productId
    app.delete("/product/:productId", products.delete);
  
    // Create a new Product
    app.delete("/product", products.deleteAll);
  };