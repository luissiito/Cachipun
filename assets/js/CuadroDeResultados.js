
import Cuadro from "./Cuadro.js";
import CuadroDeBotones from "./CuadroDeBotones.js"
import { juegoCachipun } from "../../main.js";
import Modal from "./Modal.js";

export default class CuadroDeResultados extends Cuadro{
    constructor(){
        super()
        this.titulo = document.createElement('h3')        
        this.mensaje = document.createElement('h4')        
        this.cuadroDeBotones = new CuadroDeBotones(this) 
        this.nombreJugadaJugador = document.createElement('h4')        
        this.nombreJugadaMaquina = document.createElement('h4')        
        this.botonOK = document.createElement('button')        
        this.setTitulo(juegoCachipun.getNumeroDeJuego())
        this.getBotonOK().textContent = 'OK'
        this.añadirClasesCssAlBotonOK()
        this.añadirEventoClickAlBotonOK()
        super.setElementos([this.getTitulo(), this.getMensaje(), this.getCuadroDeBotones().getContenedor(),
                            this.getNombreJugadaJugador(), this.getNombreJugadaMaquina()])
        super.getContenedor().classList.add('cuadroDeResultados')
        super.armar(super.getElementos())        
    }

    getTitulo(){ return this.titulo }
    getMensaje(){ return this.mensaje }
    getCuadroDeBotones(){ return this.cuadroDeBotones }
    getNombreJugadaJugador(){ return this.nombreJugadaJugador }
    getNombreJugadaMaquina(){ return this.nombreJugadaMaquina }
    getBotonOK(){ return this.botonOK }
    
    setCuadroDeBotones(nuevoCuadroDeBotones){ this.cuadroDeBotones = nuevoCuadroDeBotones }
    setTitulo(numeroDeJuego){
        this.getTitulo().textContent = `JUEGO Nº ${numeroDeJuego}`
    }
    setMensaje(mensaje){
        this.getMensaje().textContent = `${mensaje}`
    }
    setNombreJugadaJugador(jugada){
        this.getNombreJugadaJugador().innerHTML = `<p>TÚ JUGADA :</p><span> ${jugada}</span>`
    }
    setNombreJugadaMaquina(jugada){
        this.getNombreJugadaMaquina().innerHTML = `<p>JUGADA MÁQUINA :</p><span> ${jugada}</span>`
    }

    añadirClasesCssAlBotonOK(){
        this.getBotonOK().className += 'boton botonOK'
    }
    añadirClaseCssDisabledAlBotonOK(){
        this.getBotonOK().classList.add('disabled')
    }
    
    añadirEventoClickAlBotonOK(){
        this.getBotonOK().addEventListener('click', ()=>{
            this.insertarCuadroDeResultados(juegoCachipun.getNumeroDeJuego(), juegoCachipun.getCantidadDeJuegos())
            this.añadirClaseCssDisabledAlBotonOK()
            this.deshabilitarBotonOK()
        })
    }
    
    appendBotonOK(){
        super.getContenedor().appendChild(this.getBotonOK())
    }

    cambiarColorAlAzarAlTitulo(){
        this.getTitulo().style.backgroundColor = this.obtenerColorAlAzar()
    }

    deshabilitarBotonOK(){        
        this.getBotonOK().setAttribute('disabled','disabled')
    }

    insertarCuadroDeResultados(){
        new CuadroDeResultados().mostrar()
    }
    insertarCuadroDeResultados(numeroDeJuego, cantidadDeJuegos) {
        juegoCachipun.aumentarElNumeroDeJuego()
        if (numeroDeJuego < cantidadDeJuegos) {
            const cuadroDeResultados = new CuadroDeResultados()
            cuadroDeResultados.cambiarColorAlAzarAlTitulo()
            cuadroDeResultados.mostrar()
        } else if (numeroDeJuego == cantidadDeJuegos) {
            this.removerCuadrosDeResultados()
            const modal = new Modal()
            modal.cargarInformacionAlModal(juegoCachipun.getJugador().getVictorias(), juegoCachipun.getJugador().getDerrotas(),
                juegoCachipun.getJugador().getEmpates())
            modal.mostrar()
        }
    }

    mostrar(){
        document.querySelector('main div.resultados').appendChild(super.getContenedor())
    }

    obtenerColorAlAzar(){
        const a = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const c = Math.floor(Math.random() * 255)

        return `rgb(${a},${b},${c})`
    }

    removerCuadroDeBotones(){
        this.getCuadroDeBotones().getContenedor().remove()
    }
    removerCuadrosDeResultados(){
        document.querySelectorAll('div.cuadroDeResultados').forEach((cuadroDeResultado)=>{
            cuadroDeResultado.remove()
        })
    }
    removerBotonOK(){
        this.getBotonOK().remove()
    }
}