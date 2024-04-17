import Boton from "./Boton.js";

export default class BotonPapel extends Boton{
    constructor(){
        super()
        super.setNumero(1)
        super.getEtiqueta().textContent = 'PAPEL'
    }
}