
export default class Jugador{
    constructor(){
        this.nombre = 'JUGADOR'
        this.jugada = ''
        this.derrotas = 0
        this.empates = 0
        this.victorias = 0
    }

    getNombre(){ return this.nombre }
    getJugada(){ return this.jugada }
    getDerrotas(){ return this.derrotas }
    getEmpates(){ return this.empates }
    getVictorias(){ return this.victorias }

    setNombre(nuevoNombre){ this.nombre = nuevoNombre }
    setJugada(numero){
        switch(numero){
            case 0 : this.jugada = 'PIEDRA'; break;
            case 1 : this.jugada = 'PAPEL'; break;
            case 2 : this.jugada = 'TIJERAS'; break;
            default : 'ERROR';
        }
    }
    setDerrotas(nuevasDerrotas){ this.derrotas = nuevasDerrotas }
    setEmpates(nuevosEmpates){ this.empates = nuevosEmpates }
    setVictorias(nuevasVictorias){ this.victorias = nuevasVictorias }

    aumentarDerrotas(){ this.derrotas++ }
    aumentarEmpates(){ this.empates++ }
    aumentarVictorias(){ this.victorias++ }

    jugarPiedra(){ return 0 }
    jugarPapel(){ return 1 }
    jugarTijeras(){ return 2 }

}