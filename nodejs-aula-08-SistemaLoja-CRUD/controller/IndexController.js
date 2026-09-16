//importando o express
import express from "express";
const rota = express.Router();

// ROTA PRINCIPAL
rota.get("/",function(req,res){
    res.render("index")
})

export default rota;