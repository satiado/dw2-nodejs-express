// Importando o Express
//const express = require("express")
import express from 'express';
// Iniciando o Express 
const app = express() 

//importando a rota cliente
import clienteController from "./controller/ClienteController.js"
//importando a rota index
import indexController from "./controller/IndexController.js"
//importando a rota pedido
import pedidoController from "./controller/PedidoController.js"
//importando a rota produto
import produtoController from "./controller/ProdutoController.js"

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

//iniciando a rota cliente
app.use("/",clienteController);
//iniciando a rota index
app.use("/",indexController);
//iniciando a rota pedido
app.use("/",pedidoController);
//iniciando a produto
app.use("/",produtoController);


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})