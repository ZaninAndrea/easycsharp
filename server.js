// server.js
// where your node app starts
// init project

var express = require('express');
var app = express();

app.post( '/email/', function(req, res){

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})