
var homeModel = require('../models/homeModel')();

module.exports.index = function(req, res){
    res.render('home', {erros:{}});
};

module.exports.buscar = function(req, res){
    var dados = req.body;

    homeModel.tabelas(dados, function(erro, resultado){

        req.assert('tipobanco','Preencha o tipo do banco').notEmpty();
        req.assert('host', 'Informe o Host').notEmpty();
        req.assert('database', 'Informe o nome do banco').notEmpty();
        req.assert('usuario', 'Informe o Usuário').notEmpty();

        var validaErros = req.validationErrors();

        if(validaErros){
            res.render('home', {erros:validaErros});
            return;
        } else {
            if(!erro){
                console.log(resultado);
                res.redirect('/');
            } else {
                console.log(erro);
                res.redirect('/');
            }
        }

    });

};