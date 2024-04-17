
import BotonPiedra from './BotonPiedra.js'
import BotonPapel from './BotonPapel.js'
import BotonTijeras from './BotonTijeras.js'
import Cuadro from './Cuadro.js'
import { juegoCachipun } from '../../main.js'

export default class CuadroDeBotones extends Cuadro{
    constructor(cuadroDeResultados){
        super()
        this.botonPiedra = new BotonPiedra()
        this.botonPapel = new BotonPapel()
        this.botonTijeras = new BotonTijeras()
        super.setElementos([this.getBotonPiedra().getEtiqueta(), this.getBotonPapel().getEtiqueta(),
                            this.getBotonTijeras().getEtiqueta()])
        super.armar(super.getElementos())
        this.añadirEventoClickAlBotonPiedra(cuadroDeResultados)
        this.añadirEventoClickAlBotonPapel(cuadroDeResultados)
        this.añadirEventoClickAlBotonTijeras(cuadroDeResultados)
        this.añadirClasesCssALosBotones()
    }

    getBotonPiedra(){ return this.botonPiedra }
    getBotonPapel(){ return this.botonPapel }
    getBotonTijeras(){ return this.botonTijeras }

    añadirEventoClickAlBotonPiedra(cuadroDeResultados){
        this.getBotonPiedra().getEtiqueta().addEventListener('click', () =>{
            juegoCachipun.jugar(this.getBotonPiedra().getNumero(), cuadroDeResultados)
            cuadroDeResultados.removerCuadroDeBotones()
            cuadroDeResultados.appendBotonOK()
        })
    }
    añadirEventoClickAlBotonPapel(cuadroDeResultados){
        this.getBotonPapel().getEtiqueta().addEventListener('click', () =>{
            juegoCachipun.jugar(this.getBotonPapel().getNumero(), cuadroDeResultados)
            cuadroDeResultados.removerCuadroDeBotones()
            cuadroDeResultados.appendBotonOK()
        })
    }
    añadirEventoClickAlBotonTijeras(cuadroDeResultados){
        this.getBotonTijeras().getEtiqueta().addEventListener('click', () =>{
            juegoCachipun.jugar(this.getBotonTijeras().getNumero(), cuadroDeResultados)
            cuadroDeResultados.removerCuadroDeBotones()
            cuadroDeResultados.appendBotonOK()
        })
    }
    añadirClasesCssALosBotones(){
        this.getBotonPiedra().getEtiqueta().className += 'boton botonPiedra'
        this.getBotonPapel().getEtiqueta().className += 'boton botonPapel'
        this.getBotonTijeras().getEtiqueta().className += 'boton botonTijeras'
    }
}