//node js routing
module.exports = function (app) {

	//home page routes
	require('./app/routes/home.routes.js')(app);
	
	//notes page routes
	require('./app/routes/note.routes.js')(app);


};