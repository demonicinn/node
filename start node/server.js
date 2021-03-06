// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var mysql = require('mysql'); 				// mysql for database
var port = process.env.PORT || 3000; 				// set the port
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

// configuration ===============================================================
var database = require('./config/database'); 			// load the database config
var conn = mysql.createConnection(database); 	// Connect to localhost

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
