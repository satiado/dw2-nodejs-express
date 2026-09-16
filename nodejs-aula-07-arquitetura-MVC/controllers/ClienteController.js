//importando o express
import express from "express";
const rota = express.Router()

// ROTA DE CLIENTES
rota.get("/clientes", (req, res) => {
  const cliente = [
    {nome: "Satio Daniel", cpf: "111.111.111-01"},
    {nome: "Felipe Tamashiro", cpf: "999.999.999-02"},
    {nome: "Hector Silva", cpf: "888.888.888-03"},
    {nome: "Enzo Fernandes", cpf: "777.777.777-04"},
  ];
  res.render("Clientes", {
    //Enviando a lista de clientes para a página
    clientes:cliente,
  })
});

//Exportando o módulo 
export default rota;