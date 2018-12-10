
module.exports = function(tipoBanco, host, usuario, senha, database){
      
    if(tipoBanco == 'mysql'){
        var mysql = require('mysql');
        //console.log(tipoBanco +' '+ host +' '+ usuario +' '+ senha +' '+ database);
        var con = function(){
            return mysql.createConnection({
                host:host,
                user:usuario,
                password:senha,
                database:database
            });
        };      
        //console.log(con);  
        return con;

    } else if(tipoBanco == 'postgresql'){
        
        const { Pool, Client } = require('pg');

        const pool = new Pool({
            user: usuario,
            host: host,
            database: database,
            password: senha,
            port: 5432
        });
        //console.log(pool);
        return pool;
        
        /*
        var pg = require('pg');
        
        var conString = "postgres://"+usuario+":"+senha+"@"+host+"/"+database+"";

        pg.connect(conString, function(err, client, done) {

            if (err) {
                return console.error('error fetching client from pool', err);
            }

            client.query('SELECT $1::int AS number', ['1'], function(err, result) {
                done();
                if (err) {
                return console.error('error running query', err);
                }
                console.log(result.rows[0].number);
            });
            return client;
        });

        */
    };

};