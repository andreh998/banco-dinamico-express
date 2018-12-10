

var homeController = require('../controllers/homeController');

module.exports = function(app){

    app.get('/', function(req, res){
        homeController.index(req, res);
    });

    app.post('/', function(req, res){
        homeController.buscar(req, res);
    });

};