class Conta{
    public saldo: number = 0;

    constructor(saldo: number){
        this.saldo = saldo;
    }

    ingresarCartos(cartos:number):void{
        this.saldo = cartos + this.saldo;
    }
    sacarCartos(cartos:number):number{
        this.saldo = this.saldo - cartos
        return this.saldo;
    }
    consultarSaldo():number{
        return this.saldo
    }
}


export class CompraProducto extends Conta{

    precioProducto: number;
    cartosCliente: number;

    constructor(saldo: number,precioProducto: number,cartosCliente: number){
        super(saldo)
        this.precioProducto = precioProducto;
        this.cartosCliente = cartosCliente;
    }

    isCompradoProducto(): boolean{
        let resultado = false;
        if(super.consultarSaldo() >= this.precioProducto && this.cartosCliente >= this.precioProducto){
            
            this.sacarCartos(this.cartosCliente) 
            console.log(this.saldo)
            resultado = true;
            
        }
        return resultado
    }
    consultarSaldo(): number {
        return super.consultarSaldo()
    }
    compraProducto(){
        (this.isCompradoProducto() && true) ? console.log("Comprouse o producto") : console.log("Non chega a pasta")
    }
}


