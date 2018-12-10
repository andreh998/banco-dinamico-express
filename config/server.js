module.exports = function(){
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');
    
    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressValidator());
    
    app.use(express.static('assets'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    var rotas = require('../app/routes/router');
    rotas(app);

    app.listen(8000, function(){

    });
};