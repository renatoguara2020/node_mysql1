const Sequelize = require('sequelize');

const sequelize = new Sequelize('meuBanco','postgres', '456ALVES', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});

module.exports = sequelize;