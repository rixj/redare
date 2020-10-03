// node ./app/parser/csv_to_db.js
const csvFilePath = './app/files/Mintel_Test_Data.csv'
const csv = require('csvtojson')
//const sql = require('./app/models/db.js');
const sql = require('/Users/Danielle/Documents/redareapp/redare/app/models/db.js');

const parserParameters = {
    includeColumns:/(Product|Product Description|Brand|Category|Sub-Category|Bar Code|Production Code|Claim Category|Claims|Total Pack Size .+\)|Packaging Units|Package Type|Package Material|Package Material (Secondary)|Package Type (Secondary)|Market|Location of Manufacture|Import Status|Company|Ultimate Company|Manufacturer|All Image Links|Ingredients (Standard form))/,
}

csv(parserParameters)
.fromFile(csvFilePath)
.then(source => {
    for (var i = 0; i < source.length; i++) { 
        var product = source[i]["Product"],
        product_description = source[i]["Product Description"],
        brand = source[i]["Brand"],
        category = source[i]["Category"],
        subcategory = source[i]["Sub-Category"],
        barcode = source[i]["Bar Code"],
        production_code = source[i]["Production Code"],
        claim_category = source[i]["Claim Category"],
        claims = source[i]["Claims"],
        total_pack_size = source[i]["Total Pack Size (ml\/g)"],
        packaging_units = source[i]["Packaging Units"],
        package_type = source[i]["Package Type"],
        package_material = source[i]["Package Material"],
        package_material_2ndary = source[i]["Package Material (Secondary)"],
        package_type_2ndary = source[i]["Package Type (Secondary)"],
        market = source[i]["Market"],
        image_links = source[i]["All Image Links"],
        location_of_manufacture = source[i]["Location of Manufacture"],
        import_status = source[i]["Import Status"],
        company = source[i]["Company"],
        ultimate_company = source[i]["Ultimate Company"],
        manufacturer = source[i]["Manufacturer"],
        ingredients = source[i]["Ingredients (Standard form)"]
  
        var insertStatement =  
        `INSERT INTO mintel(product, product_description, brand, category, subcategory, barcode, production_code, claim_category, claims, total_pack_size, packaging_units, package_type, package_material, package_material_2ndary, package_type_2ndary, market, image_links, location_of_manufacture, import_status, company, ultimate_company, manufacturer, ingredients) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`; 
        var items = [product, product_description, brand, category, subcategory, barcode, production_code, claim_category, claims, total_pack_size, packaging_units, package_type, package_material, package_material_2ndary, package_type_2ndary, market, image_links, location_of_manufacture, import_status, company, ultimate_company, manufacturer, ingredients]; 
  
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
    console.log("All items stored into database successfully.");
        
    sql.end(function(err) {
        if (err) {
            return console.log("error:" + err.message);
        }
        console.log("Closed the database connection.");
        });
})
