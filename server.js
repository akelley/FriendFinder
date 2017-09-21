// this page to run the server

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);	// using express to use routes for HTML and API files; apiRoutes FIRST
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("Listening on port number " + PORT + "...");
});