 module.exports = function(app) {

    var home = require('../controllers/home.controller.js');

    
    app.get('/', home.findAll);

}