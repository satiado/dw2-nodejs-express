//importando o express
import express from "express";
//importando o model
import Pedido from "../models/Pedido.js";
const rota = express.Router();

// ROTA PEDIDOS
rota.get("/pedidos",function(req,res){
    //Selecionando todos os clientes do banco de dados (PROMISSE)
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", {
            //Enviando a lista de pedidos para a página HTML(front-end)
            pedidos: pedidos
        });        
    }).catch((error) => {
        console.log(`Ocorreu um erro ao listar os Pedidos. Erro: ${error}`)
    });
});

export default rota;