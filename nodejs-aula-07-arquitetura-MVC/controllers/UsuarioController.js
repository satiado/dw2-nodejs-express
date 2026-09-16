//importando o express
import express from "express";
const rota = express.Router()

// ROTA DE PERFIL
rota.get("/perfil", (req, res) => {
  res.render("perfil");
});

export default rota;