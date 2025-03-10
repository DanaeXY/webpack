import { CompraProducto } from "./clases/clases"
// src/index.ts
import './css/main.css'; // Asegúrate de que la ruta sea correcta

let instanciaCompraProducto = new CompraProducto(50,30,30)
instanciaCompraProducto.compraProducto()

if(location.pathname == "/enviando-datos"){
    console.log("estou de novo dentro ...")

    let reciboDatos = await fetch("/envio-datos-automaticamente");
    console.log("recibo datos get ",await reciboDatos.json())

    const refBoton: HTMLButtonElement = document.querySelector("#envio");

    refBoton.addEventListener("click",async ()=>{
        type datosObxeto = {
            dato1: string,
            dato2: string,
            dato3: number
        }

        let datosEnvio: datosObxeto = {
            dato1: "mariano",
            dato2: "pepito",
            dato3: 5
        }

        let obxetoEnvio = {
            method: 'post',
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(datosEnvio)
        }
        let resposta = await fetch("/envio-datos-test",obxetoEnvio);
        let respostaJson = await resposta.json()
        console.log("isto ven do servidor",respostaJson)
    })
}
