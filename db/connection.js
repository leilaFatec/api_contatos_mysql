const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER ||'usuario',
    password: process.env.PASSWORD || 'senha',
    database: process.env.DATABASE || 'contatosBD',
    port: process.env.DB_PORT || 3306
});


module.exports = pool.promise();