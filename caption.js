var xlsx = require('xlsx');
var fs = require('fs');
var _ = require('underscore');



//var obj = xlsx. parse_xlscfb(__dirname + '/AuditReport.xlsx'); // parses a file
var sheet = xlsx.read(fs.readFileSync(__dirname + '/AuditReport.xlsx') ).Sheets.Sheet1;
var json = xlsx.utils.sheet_to_json(sheet);
var columnNames = _.keys(json[0]);
var record = {};
columnNames.forEach(function(key){   record[json[0][key]] = key });
columnNames = record;
json = json.slice(1);
var table = [];
var stuff =  json.map(function(row){
    var newRow = {};
    columnNames.forEach(function(obj){ newRow[obj] })
});

