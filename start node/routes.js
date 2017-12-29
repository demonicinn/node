var mysql = require('mysql');
var database = require('./config/database');
var conn = mysql.createConnection(database); 

module.exports = function (app) {

    // index page
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.htm');
    });
	
	// about page
    app.get('/about', function (req, res) {
	
	conn.connect(function(err) {
  if (err) throw err;
  conn.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    //Return the fields object:
    console.log(fields);
  });
});
        res.sendFile(__dirname + '/public/about.htm');
    });	
	
	
	
};