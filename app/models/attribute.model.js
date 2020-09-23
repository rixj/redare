const sql = require("./db.js");

// constructor
const Attribute = function(attribute) {
  this.category = attribute.category; 
  this.model_criteria = attribute.model_criteria; 
  this.label = attribute.label; 
  this.links = attribute.links;
};

Attribute.create = (newAttribute, result) => {
  sql.query("INSERT INTO attribute SET ?", newAttribute, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created attribute: ", { id: res.insertId, ...newAttribute });
    result(null, { id: res.insertId, ...newAttribute });
  });
};

Attribute.findById = (attributeId, result) => {
  sql.query(`SELECT * FROM attribute WHERE id = ${attributeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found attribute: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Attribute with the id
    result({ kind: "not_found" }, null);
  });
};

Attribute.getAll = result => {
  sql.query("SELECT * FROM attribute", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("attributes: ", res);
    result(null, res);
  });
};

Attribute.updateById = (id, attribute, result) => {
  sql.query(
    "UPDATE attributes SET barcode = ?, name = ?, brand = ? WHERE id = ?",
    [attribute.barcode, attribute.name, attribute.brand, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Attribute with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated attribute: ", { id: id, ...attribute });
      result(null, { id: id, ...attribute });
    }
  );
};

Attribute.remove = (id, result) => {
  sql.query("DELETE FROM attribute WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Attribute with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted attribute with id: ", id);
    result(null, res);
  });
};

Attribute.removeAll = result => {
  sql.query("DELETE FROM attribute", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} attributes`);
    result(null, res);
  });
};

module.exports = Attribute;