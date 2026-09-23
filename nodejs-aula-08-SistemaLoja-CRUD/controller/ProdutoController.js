//importando o express
import express from "express";
import Produto from "../models/Produto.js"
const rota = express.Router();

// ROTA PRODUTOS
rota.get("/produtos",function(req,res){
    //Selecionando todos os clientes do banco de dados (PROMISSE)
    Produto.findAll().then((produtos) => {
        res.render("produtos", {
            //Enviando a lista de clientes para a página HTML(front-end)
            produtos: produtos
        });
    }).catch((error) => {
        console.log(`Ocorreu um erro ao listar os Produtos. Erro: ${error}`)
    });
});

export default rota;