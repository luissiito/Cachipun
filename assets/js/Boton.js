
export default class Boton{
    constructor(){
        this.etiqueta = document.createElement('button')
        this.numero = 0
    }

    getEtiqueta(){ return this.etiqueta }
    getNumero(){ return this.numero }

    setEtiqueta(nuevaEtiqueta){ this.etiqueta = nuevaEtiqueta }
    setNumero(nuevoNumero){ this.numero = nuevoNumero }
}