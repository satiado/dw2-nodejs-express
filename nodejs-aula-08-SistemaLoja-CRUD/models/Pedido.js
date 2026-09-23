//Model Pedido
//Um model é uma representação de uma entidade do sistema (tabela)

//importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
//importando a biblioteca Sequelize
import Sequelize from "sequelize";

const Pedido = connection.define(`pedidos`, {
    //atributos de pedido
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

//o método .sync() sincroniuza a estrutura do model com o banco de dados
//force: false => sincroniza a tabela somente na primeira vez (somente se ela não existir)
Pedido.sync({force: false})

//exporando o módulo
export default Pedido;