// node ./app/parser/db_to_csv.js
//const mysql = require('mysql');
const excel = require("exceljs"); // npm install --save exceljs
const sql = require("/Users/Danielle/Documents/redareapp/redare/app/models/db.js");

sql.query("SELECT * FROM mintel", function(err, customers, fields) {
  //const jsonCustomers = JSON.parse(JSON.stringify(customers));
  /**
       console.log(jsonCustomers);
        [ { id: 1, address: 'Jack Smith', age: 23, name: 'Massachusetts' },
        { id: 2, address: 'Adam Johnson', age: 27, name: 'New York' },
        { id: 3, address: 'Katherin Carter', age: 26, name: 'Washington DC' },
        { id: 4, address: 'Jack London', age: 33, name: 'Nevada' },
        { id: 5, address: 'Jason Bourne', age: 36, name: 'California' } ]
      
        */

    let workbook = new excel.Workbook();

    // SHEET 0 Metadata
    let worksheet0 = workbook.addWorksheet('Metadata');
    var rows0 =[
      ["type","id","comp_prod_data_col","comp_data_col","expertise_col"],
      ["Redare Data File","RD0000005",15,5,3]
      ]
    worksheet0.addRows(rows0);

    // SHEET 1 Experts
    let worksheet1 = workbook.addWorksheet('Experts');
    var rows1 =[
    ["name","info","expertise",""],
    ["Jason Czarnezki","An expert on natural resources law, environmentalism, food policy, sustainable public procurement, private environmental governance.",1,1],
    ["[Steven Lord","An expert on the sustainability and resilience of complex systems. Senior researcher in the Environmental Change Institute at the University of Oxford.",1,1]
    ]
    worksheet1.addRows(rows1);

    // SHEET 2 Products
    let worksheet2 = workbook.addWorksheet('Products');
    var rows2 =[
    ["name","info"],
    ["Hard Surface Care","Household cleaning sprays available for retail purchase in Sweden"],
    ["Dairy","Dairy products for sale in Sweden"]
    ]
    worksheet2.addRows(rows2);

/* //   SHEET 1
    let worksheet = workbook.addWorksheet('Metadata'); //creating worksheet

    //  WorkSheet Header
    worksheet.columns = [
      { header: 'type', key: '_id', width: 30 },
      { header: 'id', key: 'name', width: 30 },
      { header: 'comp_prod_data_col', key: 'address', width: 30},
  //     { header: 'expertise_col', key: 'age', width: 30, outlineLevel: 1}
  //   ];

    // Add Array Rows
    worksheet.addRows(jsonCustomers);
*/
    // Write to File
    workbook.xlsx.writeFile("./app/files/RDS_api_0000.xlsx")
    .then(function() {
      console.log("File saved!");
    }); 

  sql.end(function(err) {
    if (err) {
      return console.log("error:" + err.message);
    }
    console.log("Closed the database connection.");
  });
});
