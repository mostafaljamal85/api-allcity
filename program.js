
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 

var XLSX = require("xlsx");
var workbook = XLSX.readFile("worldcities.xlsx");
var worksheet = workbook.Sheets[workbook.SheetNames[0]];
var excel=XLSX.utils.sheet_to_json(worksheet)


app.get('/', function (req, res) {
  res.send(excel)
})



app.listen(3000)