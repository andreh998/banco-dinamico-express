

module.exports = function(){

    this.tabelas = function(dados, retorno){
        
        //console.log(dados);

        var databaseDinamico = require('../../config/databaseDinamico')(dados.tipobanco, 
            dados.host, 
            dados.usuario, 
            dados.senha, 
            dados.database
        );

        //console.log(con);

        if(dados.tipobanco == 'mysql'){

            var con = databaseDinamico();

            return con.query('SHOW TABLES', retorno);

        } else if (dados.tipobanco == 'postgresql'){

            var pool = databaseDinamico;
            //console.log(pool);
            //return pool.query('SELECT * FROM usuarios', retorno);            
            return pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema=\'public\' AND table_type=\'BASE TABLE\';', retorno);
            

        }
        

    };

    return this;

};