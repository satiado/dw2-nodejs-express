// index.js : arquivo principal do back-end.
// Importando o Express.js para o projeto
//const express = require("express"); // Forma clássica (CommonJS Modules)
import express from 'express';//froma de importação do ES6
const app = express(); // Criando uma instância do Express

//Importando o controller de produto
import produtoController from "./controllers/ProdutoController.js"
//Importando o controller de cliente
import clienteController from "./controllers/ClienteController.js"
//Importando o controller de Usuario
import usuarioController from "./controllers/UsuarioController.js"
//Importando o controller de Servico
import servicoController from "./controllers/ServicoController.js"

//CONFIGURAÇÕES DO EXPRESS
// Configurando o EJS
app.set("view engine", "ejs"); // EJS renderiza as páginas do site
//Configurando a pasta 'PUBLIC' para arquivos estáticos
app.use(express.static('public'));
//configurando as rotas
//Inicializando as rotas de Produto
app.use("/",produtoController);
//Inicializando as rotas de Cliente
app.use("/",clienteController);
//Inicializando as rotas de Usuario
app.use("/",usuarioController);
//Inicializando as rotas de Servico
app.use("/",servicoController);

// AQUI IRÃO AS ROTAS DO SITE
// ROTA PRINCIPAL
// .get() -> cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

// Método do Express para iniciar o servidor back-end
// app.listen();

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro ${error}`);
    // Em caso de sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});