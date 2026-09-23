//Model Produto
//Um model é uma representação de uma entidade do sistema (tabela)

//importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
//importando a biblioteca Sequelize
import Sequelize from "sequelize";

const Produto = connection.define(`produtos`, {
    //atributos de pedido
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//o método .sync() sincroniuza a estrutura do model com o banco de dados
//force: false => sincroniza a tabela somente na primeira vez (somente se ela não existir)
Produto.sync({force: false})

//exporando o módulo
export default Produto;