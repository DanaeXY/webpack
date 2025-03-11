import { CompraProducto } from "./clases/clases"
import { comunicacionGET } from "./comunicacion/funcion.comunicacion";

import './css/main.css'; // Temos que integrar o CSS para que webpack o compile


if(location.pathname == "/enviando-datos"){ 
    let reciboDatos = await fetch("/envio-datos-automaticamente");
    console.log("recibo datos get ",await reciboDatos.json())
}
if(location.pathname == "/logueo-basico"){
    const refBoton: HTMLButtonElement = document.querySelector("#envio");
    console.log(refBoton)
    refBoton.addEventListener("click",comunicacionGET)
}
