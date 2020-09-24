// node ./app/parser/csv_to_db.js
const csvFilePath = './app/files/Mintel_Test_Data.csv'
const csv = require('csvtojson')
//const sql = require('./app/models/db.js');
const sql = require('/Users/Danielle/Documents/redareapp/redare/app/models/db.js');

const parserParameters = {
    includeColumns:/(Product|Product Description|Category|Sub-Category|Bar Code|Production Code|Claim Category|Claims|Package Type|Package Material|Package Material (Secondary)|Package Type (Secondary)|Location of Manufacture|Import Status|Ultimate Company|Manufacturer|Ingredients (Standard form))/,
}

csv(parserParameters)
.fromFile(csvFilePath)
.then(source => { 
    for (var i = 0; i < source.length; i++) { 
        var product = source[i]["Product"],
        product_description = source[i]["Product Description"],
        category = source[i]["Category"],
        subcategory = source[i]["Sub-Category"],
        barcode = source[i]["Bar Code"],
        production_code = source[i]["Production Code"],
        claim_category = source[i]["Claim Category"],
        claims = source[i]["Claims"],
        package_type = source[i]["Package Type"],
        package_material = source[i]["Package Material"],
        package_material_2ndary = source[i]["Package Material (Secondary)"],
        package_type_2ndary = source[i]["Package Type (Secondary)"],
        location_of_manufacture = source[i]["Location of Manufacture"],
        import_status = source[i]["Import Status"],
        ultimate_company = source[i]["Ultimate Company"],
        manufacturer = source[i]["Manufacturer"],
        ingredients = source[i]["Ingredients (Standard form)"]
  
        var insertStatement =  
        `INSERT INTO mintel(product, product_description, category, subcategory, barcode, production_code, claim_category, claims, package_type, package_material, package_material_2ndary, package_type_2ndary, location_of_manufacture, import_status, ultimate_company, manufacturer, ingredients) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`; 
        var items = [product, product_description, category, subcategory, barcode, production_code, claim_category, claims, package_type, package_material, package_material_2ndary, package_type_2ndary, location_of_manufacture, import_status, ultimate_company, manufacturer, ingredients]; 
  
        // Inserting data of current row 
        // into database 
        sql.query(insertStatement, items,  
            (err, results, fields) => { 
            if (err) { 
                console.log( 
    "Unable to insert item at row ", i + 1); 
                return console.log(err); 
            } 
        }); 
    } 
    console.log( 
"All items stored into database successfully"); 
})
