var mysql = require('mysql');
var database = require('./config/database');
var conn = mysql.createConnection(database);

//require('./models/todo');

function get(res, table) {
    conn.query("SELECT * FROM "+table, function (err, result, fields) {
		res.json(result)
		console.log(result)
	});
};


module.exports = function (app) {
	
    // index page
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.htm');
	});
	
 	
	
	
	
	// contact page
    app.get('/api/contact/get', function (req, res) {
		get(res, 'customers')
	});
	
	
};