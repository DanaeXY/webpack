const express = require("express");
const path = require("path");
const { paxinaApp, paxinaNoUser } = require("./controladores/views");
const app = express();

// Paxinas
app.use(express.urlencoded({extended: true}))


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "dist")));
//### GETTERS


//### POST
app.post("/enviando-datos",(req,res)=>{
    console.log(req)
    console.log("recibo dato no server",req.body)

    let condicion = req.body.nome2 === 'Israel' && req.body.apelido2 === 'mariano';
    
    condicion ? (paxinaApp(req,res)) : (paxinaNoUser(req,res))

})
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});