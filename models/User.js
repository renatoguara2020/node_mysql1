const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING
    },
    
});

//Criar a tabela
//User.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
//User.sync({ force: true });

module.exports = User;