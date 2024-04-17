
import Maquina from "./Maquina.js"
import Jugador from "./Jugador.js"
import CuadroDeResultados from "./CuadroDeResultados.js"

export default class JuegoCachipun{
    constructor(){
        this.maquina = new Maquina()
        this.jugador = new Jugador()
        this.inputCantidadDeJuegos = document.querySelector('main div input[type="text"]')
        this.cantidadDeJuegos = 0
        this.numeroDeJuego = 0
        this.botonJugar = document.querySelector('main div button')
    }

    getMaquina(){ return this.maquina }
    getJugador(){ return this.jugador }
    getInputCantidadDeJuegos(){ return this.inputCantidadDeJuegos }
    getCantidadDeJuegos(){ return this.cantidadDeJuegos }
    getNumeroDeJuego(){ return this.numeroDeJuego }
    getBotonJugar(){ return this.botonJugar }

    setMaquina(nuevaMaquina){ this.maquina = nuevaMaquina }
    setJugador(nuevoJugador){ this.jugador = nuevoJugador }
    setInputCantidadDeJuegos(nuevoInputCantidadDeJuegos){ this.inputCantidadDeJuegos = nuevoInputCantidadDeJuegos }
    setCantidadDeJuegos(nuevaCantidadDeJuegos){ this.cantidadDeJuegos = nuevaCantidadDeJuegos }
    setNumeroDeJuego(nuevoNumeroDeJuego){ this.numeroDeJuego = nuevoNumeroDeJuego }
    setBotonJugar(nuevoBotonJugar){ this.botonJugar = nuevoBotonJugar }

    añadirEventoClickAlBotonJugar(){
        this.getBotonJugar().addEventListener('click', ()=>{
            this.comenzar()
            this.insertarCuadroDeResultados()
            this.getBotonJugar().remove()
        })
    }

    aumentarElNumeroDeJuego(){
        this.numeroDeJuego++;
    }
    
    comenzar(){
        this.setCantidadDeJuegos(this.getInputCantidadDeJuegos().value)
        this.aumentarElNumeroDeJuego()
    }

    iniciar(){
        this.añadirEventoClickAlBotonJugar()
    }

    insertarCuadroDeResultados(){
        const cuadroDeResultados = new CuadroDeResultados()
        cuadroDeResultados.cambiarColorAlAzarAlTitulo()
        cuadroDeResultados.mostrar()
    }

    jugar(jugada, cuadroDeResultados){ 
        const jugadaRandomDeLaMaquina = this.getMaquina().obtenerNumeroDeJugadaRandom()
        this.setJugadaDelJugador(jugada)
        this.setJugadaDeLaMaquina(jugadaRandomDeLaMaquina)
        cuadroDeResultados.setNombreJugadaJugador(this.getJugador().getJugada())
        cuadroDeResultados.setNombreJugadaMaquina(this.getMaquina().getJugada())
        this.obtenerGanador(jugada, jugadaRandomDeLaMaquina, cuadroDeResultados)
    }

    setJugadaDelJugador(jugada){
        switch(jugada){
            case 0 : this.getJugador().setJugada(this.getJugador().jugarPiedra()); break;
            case 1 : this.getJugador().setJugada(this.getJugador().jugarPapel()); break;
            case 2 : this.getJugador().setJugada(this.getJugador().jugarTijeras()); break;
        }
    }

    setJugadaDeLaMaquina(jugada){
        switch(jugada){
            case 0 : this.getMaquina().setJugada(this.getMaquina().jugarPiedra()); break;
            case 1 : this.getMaquina().setJugada(this.getMaquina().jugarPapel()); break;
            case 2 : this.getMaquina().setJugada(this.getMaquina().jugarTijeras()); break;
        }
    }    

    obtenerGanador(jugadaJugador, jugadaMaquina, cuadroDeResultados) {
        if (jugadaJugador == jugadaMaquina) {
            this.getJugador().aumentarEmpates()
            cuadroDeResultados.setMensaje('ES UN EMPATE')
            cuadroDeResultados.getMensaje().classList.add('empatar')
        } else if ((jugadaJugador == 0) && (jugadaMaquina == 2) || (jugadaJugador == 2) && (jugadaMaquina == 1)
            || (jugadaJugador == 1) && (jugadaMaquina == 0)) {
            this.getJugador().aumentarVictorias()
            cuadroDeResultados.setMensaje('GANASTE. FELICITACIONES !')
            cuadroDeResultados.getMensaje().classList.add('ganar')
        } else {
            this.getJugador().aumentarDerrotas()
            cuadroDeResultados.setMensaje('PERDISTE. SUERTE EN LA PRÓXIMA')
            cuadroDeResultados.getMensaje().classList.add('perder')
        }
    }
}