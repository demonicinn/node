var express = require('express');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// load the database config

mongoose.connect(dbConfig.url, {
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

//routes
require('./routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});