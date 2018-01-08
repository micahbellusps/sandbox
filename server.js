var express = require('express');
var path = require('path');
var app = express();

//set view engine
app.set("view engine","jade")
app.use("/public", express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {

    res.render('test');

});

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});