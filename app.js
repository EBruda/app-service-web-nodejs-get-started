const noble = require('noble');
const bluetooth = require('bleat').webbluetooth;
const fs = require('fs')
const cheerio = require('cheerio')
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')


var app = express();
var engines = require('consolidate');

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname)); //__dir and not _dir
var port = 8000; // you can use any port
app.listen(port);
console.log('server on' + port);

app.use(bodyParser.json());

app.post('/prediction_wrapper', async (req, res) => {
  const $ = cheerio.load(fs.readFileSync('index.html'));


  $("#prediction_val").text("no prediction")
  res.send($.html())

});