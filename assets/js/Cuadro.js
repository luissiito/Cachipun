
export default class Cuadro{
    constructor(){
        this.contenedor = document.createElement('div')
        this.elementos = []
        
    }
    getContenedor(){ return this.contenedor }
    getElementos(){ return this.elementos }

    setElementos(nuevosElementos){ this.elementos = nuevosElementos }

    armar(elementosHTML){
        for (const elementoHTML of elementosHTML) {
            this.getContenedor().appendChild(elementoHTML)                        
        }
    }
}