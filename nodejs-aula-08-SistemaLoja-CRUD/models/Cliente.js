//Model Cliente
//Um model é uma representação de uma entidade do sistema (tabela)

//importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
//importando a biblioteca Sequelize
import Sequelize from "sequelize";

//o método define() define a estrutura de uma tabela no banco
const Cliente = connection.define('clientes',{
    //Atributos da tabela clientes
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

//o método .sync() sincroniuza a estrutura do model com o banco de dados
//force: false => sincroniza a tabela somente na primeira vez (somente se ela não existir)
Cliente.sync({force: false})

//exportando o módulo
export default Cliente;