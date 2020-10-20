// node ./app/parser/db_to_xlsx.js
//const mysql = require('mysql');
const excel = require("exceljs"); // npm install --save exceljs
const sql = require("/Users/Danielle/Documents/redareapp/redare/app/models/db.js");


let workbook = new excel.Workbook();

let static_sheet = new Promise(function(resolve,reject) {
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
    resolve();
});

let hard_surface_sheet = new Promise(function(resolve,reject) {
    // SHEET 3 Hard Surface Care
    console.log("surface promise");
    let worksheet3 = workbook.addWorksheet('Hard Surface Care'); //creating worksheet
    sql.query("SELECT * FROM mintel WHERE category = 'Hard Surface Care' LIMIT 0,20", function(err, blob, fields) {
        const jsonMintel = JSON.parse(JSON.stringify(blob));
        worksheet3.columns = [
            { header: 'id', key: 'barcode'},
            { header: 'manufacturer', key: 'manufacturer'},
            { header: 'company', key: 'company'},
            { header: 'ultimate_company', key: 'ultimate_company'},
            { header: 'brand', key: 'brand'},
            { header: 'name', key: 'name'}
            //{ header: 'displayname', key: 'displayname'},
        ];
        worksheet3.addRows(jsonMintel);
        // console.log(jsonMintel);
        resolve();
    }); 
});

let dairy_sheet = new Promise(function(resolve,reject) {
    // SHEET 4 Dairy
    console.log("dairy promise");
    let worksheet4 = workbook.addWorksheet('Dairy'); //creating worksheet
    sql.query("SELECT * FROM mintel WHERE category = 'Dairy' LIMIT 0,20", function(err, blob, fields) {
        const jsonMintel = JSON.parse(JSON.stringify(blob));
        worksheet4.columns = [
            { header: 'id', key: 'barcode'},
            { header: 'manufacturer', key: 'manufacturer'},
            { header: 'company', key: 'company'},
            { header: 'ultimate_company', key: 'ultimate_company'},
            { header: 'brand', key: 'brand'},
            { header: 'name', key: 'name'}
            //{ header: 'displayname', key: 'displayname'},
        ];
        worksheet4.addRows(jsonMintel);
        // console.log(jsonMintel);
        resolve();
    }); 
});

static_sheet.then(function(result) {
    hard_surface_sheet.then(function(result) {
        dairy_sheet.then(function(result) {
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
        }) 
    })
});