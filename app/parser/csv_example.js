// node ./app/parser/csv_to_db.js
const csvFilePath='./app/files/Mintel_Test_Data.csv'
const csv=require('csvtojson')

const parserParameters = {
    includeColumns:/(Product|Product Description|Category|Sub-Category|Bar Code|Production Code|Claim Category|Claims|Package Type|Package Material|Package Material (Secondary)|Package Type (Secondary)|Location of Manufacture|Import Status|Ultimate Company|Manufacturer|Ingredients (Standard form))/,

}

csv(parserParameters)
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     *  {a:"1", b:"2", c:"3"},
     *  {a:"4", b:"5". c:"6"}
     * ]
     */ 
})

// Async / await usage
//const jsonArray=await csv().fromFile(csvFilePath);

// parse requests of content-type: application/json
//app.use(bodyParser.json());