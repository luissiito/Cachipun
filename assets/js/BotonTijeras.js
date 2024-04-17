import Boton from "./Boton.js";

export default class BotonTijeras extends Boton{
    constructor(){
        super()
        super.setNumero(2)
        super.getEtiqueta().textContent = 'TIJERAS'
    }
}