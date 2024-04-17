import Boton from "./Boton.js";

export default class BotonPiedra extends Boton{
    constructor(){
        super()
        super.setNumero(0)
        super.getEtiqueta().textContent = 'PIEDRA'
    }
}