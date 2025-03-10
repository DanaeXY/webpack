const express = require("express");
const path = require("path");
const { paxinaApp, paxinaNoUser } = require("./controladores/views");
const app = express();

// Paxinas
app.use(express.urlencoded({extended: true}))


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "dist")));
//### GETTERS
app.get("/envio-datos-automaticamente",(req,res)=>{
    res.send({
        mensaxe:{
            dato1:"Juanito",
            dato2:"pepito",
            dato3:3
        }
    })
})

//### POST
app.post("/logueo-basico",(req,res)=>{
    
    console.log("recibo dato no server",req.body)

    let condicion = req.body.nome2 === 'Israel' && req.body.apelido2 === 'mariano';
    
    condicion ? (paxinaApp(req,res)) : (paxinaNoUser(req,res))

})
//Un evento dende o cliente
app.post("/envio-datos-test",(req,res)=>{
    res.send({mensaxe:"datos enviados"})
})
//##########
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});