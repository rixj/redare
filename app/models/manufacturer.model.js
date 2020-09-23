const sql = require("./db.js");

// constructor
const Manufacturer = function(manufacturer) {
  this.name = manufacturer.name; 
  this.ultimate_company = manufacturer.ultimate_company; 
  this.country_hq = manufacturer.country_hq;
};

Manufacturer.create = (newManufacturer, result) => {
  sql.query("INSERT INTO manufacturer SET ?", newManufacturer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created manufacturer: ", { id: res.insertId, ...newManufacturer });
    result(null, { id: res.insertId, ...newManufacturer });
  });
};

Manufacturer.findById = (manufacturerId, result) => {
  sql.query(`SELECT * FROM manufacturer WHERE id = ${manufacturerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found manufacturer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Manufacturer with the id
    result({ kind: "not_found" }, null);
  });
};

Manufacturer.getAll = result => {
  sql.query("SELECT * FROM manufacturer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("manufacturers: ", res);
    result(null, res);
  });
};

Manufacturer.updateById = (id, manufacturer, result) => {
  sql.query(
    "UPDATE manufacturers SET barcode = ?, name = ?, brand = ? WHERE id = ?",
    [manufacturer.barcode, manufacturer.name, manufacturer.brand, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Manufacturer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated manufacturer: ", { id: id, ...manufacturer });
      result(null, { id: id, ...manufacturer });
    }
  );
};

Manufacturer.remove = (id, result) => {
  sql.query("DELETE FROM manufacturer WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Manufacturer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted manufacturer with id: ", id);
    result(null, res);
  });
};

Manufacturer.removeAll = result => {
  sql.query("DELETE FROM manufacturer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} manufacturers`);
    result(null, res);
  });
};

module.exports = Manufacturer;