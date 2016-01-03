var express = require('express');
var app = express();
var PORT = 3000;

var middleWare = require('./middleWare.js');

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthentication,  function (req, res) {
	res.send('About us Page!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);



app.listen(PORT, function (){
	console.log('Express server started on ' + PORT + '!');
	
});