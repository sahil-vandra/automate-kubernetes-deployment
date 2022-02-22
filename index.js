var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Sahil Vandra today is 23 Feb" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World from 22 Feb" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! on 22 Feb" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
