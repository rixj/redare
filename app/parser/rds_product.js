var express = require('express');
var router = express.Router();
const sql = require("/Users/Danielle/Documents/redareapp/redare/app/models/db.js");

function getDairy(callback) {    
    sql.query("SELECT * FROM rds_product WHERE category = 'Dairy'",
        function (err, rows) {
            console.log("a");
            callback(err, rows);
            console.log("b");
        }
    );
    sql.end(function(err) {
        if (err) {
          return console.log("error:" + err.message);
        }
        console.log("Closed the database connection.");
      });
}

function getSurface(callback) {    
    sql.query("SELECT * FROM rds_product WHERE category = 'Hard Surface Care'",
        function (err, rows) {
            callback(err, rows); 
        }
    );    
}

module.exports = router;