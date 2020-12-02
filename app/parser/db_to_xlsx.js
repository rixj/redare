// node ./app/parser/db_to_xlsx.js
const excel = require("exceljs"); // npm install --save exceljs
const sql = require("../models/db.js");

let workbook = new excel.Workbook();

function sheetStatic() {
  return new Promise(function(resolve, reject) {
    // SHEET 0 Metadata
    let worksheet0 = workbook.addWorksheet("Metadata");
    var rows0 = [
      ["type", "id", "comp_prod_data_col", "comp_data_col", "expertise_col"],
      ["Redare Data File", "RD0000005", 15, 5, 3]
    ];
    worksheet0.addRows(rows0);

    // SHEET 1 Experts
    let worksheet1 = workbook.addWorksheet("Experts");
    var rows1 = [
      ["name", "info", "expertise", ""],
      [
        "Jason Czarnezki",
        "An expert on natural resources law, environmentalism, food policy, sustainable public procurement, private environmental governance.",
        1,
        1
      ],
      [
        "Steven Lord",
        "An expert on the sustainability and resilience of complex systems. Senior researcher in the Environmental Change Institute at the University of Oxford.",
        1,
        1
      ]
    ];
    worksheet1.addRows(rows1);

    // SHEET 2 Products
    let worksheet2 = workbook.addWorksheet("Products");
    var rows2 = [
      ["name", "info"],
      [
        "Hard Surface Care",
        "Household cleaning sprays available for retail purchase in Sweden"
      ],
      ["Dairy", "Dairy products for sale in Sweden"]
    ];
    worksheet2.addRows(rows2);
    resolve();
  });
}

function sqlQuery(query) {
  return new Promise(function(resolve, reject) {
    sql.query(query, function(err, blob, fields) {
      const jsonMintel = JSON.parse(JSON.stringify(blob));
      resolve(jsonMintel);
    });
  });
}

function sheetProduct(tabName, promiseProduct, infoLabel, infoValue) {
  return new Promise(function(resolve, reject) {
    // console.log(promiseProduct);
    let worksheet3 = workbook.addWorksheet(tabName);
      worksheet3.columns = [
        { header: "sql_id", key: "id" },
        { header: "id", key: "rds_id" },
        { header: "name", key: "name" },
        { header: "brand", key: "brand" },
        { header: "market", key: "brand" },
        { header: "manufacturer", key: "manufacturer" },
        { header: "company", key: "company" },
        { header: "ultimate_company", key: "ultimate_company" },
        { header: 'displayname', key: 'displayname'},
        { header: 'size', key: 'size'},
        { header: 'imagelink', key: 'imagelinks'},
        { header: 'imagefile', key: 'imagefile'},
        { header: 'subgroup_1', key: 'subgroup_1'},
        { header: 'subgroup_2', key: 'subgroup_2'},
        { header: 'product_description', key: 'product_description'},
      ];
      worksheet3.addRows([""]);
      const products = JSON.parse(JSON.stringify(promiseProduct));
      // console.log(products);
      worksheet3.addRows(promiseProduct);
      // for (var key in promiseProduct) {
      //   console.log(key);
      // }
      // console.log(promiseProduct[0]);
      let cols;
      let row = worksheet3.getRow(1);
      let rowSql = worksheet3.getRow(2);
      cols = row.cellCount;
      var index = cols + 1;
      for (var key in infoLabel) {
        if (infoLabel.hasOwnProperty(key)) {
          row.getCell(index).value = infoLabel[key].Category;
          rowSql.getCell(index).value = infoLabel[key].id;
          index++;
        }
      }
      let rowCount = worksheet3.rowCount;
      for (var key in infoValue) {
        for (var rds = 2; rds < rowCount; rds++) {
          var a = worksheet3.getRow(rds);
          if (a.getCell(1).value == infoValue[key].mintel_id) {
            a.getCell(cols + infoValue[key].attribute_id).value = 1;
          }
        }
      }
      worksheet3.spliceRows(2, 1);
      worksheet3.spliceColumns(1, 1);
      resolve();
  });
}

function buildSheet(data){
    sheetProduct("Hard Surface Care", data[0], data[2], data[3]).then(result =>{
      sheetProduct("Dairy Drinks", data[1], data[2], data[3]).then(finalResult => {
        workbook.xlsx.writeFile("./app/files/RDS_api_0000.xlsx").then(function() {
          console.log("File saved!");
        });
      })
    })
}



const promiseClean = sqlQuery("SELECT * FROM rds_product WHERE category = 'Hard Surface Care'");
const promiseDairy = sqlQuery("SELECT * FROM rds_product WHERE category = 'Dairy'");
const promiseCompInfoLabel = sqlQuery("SELECT c.id, CONCAT(c.category,': ',c.model_criteria,': ',c.label) AS Category FROM comp_info c");
const promiseCompInfoValue = sqlQuery("SELECT * FROM mintel_comp");

Promise.all([promiseClean, promiseDairy, promiseCompInfoLabel, promiseCompInfoValue])
  .then(async (response) => {
    buildSheet(response);
  })
  .finally(finalResult => {
    sql.end(function(err) {
      if (err) {
        return console.log("error:" + err.message);
      }
      console.log("Closed the database connection.");
    });
  });
