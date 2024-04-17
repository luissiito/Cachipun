
import Jugador from './Jugador.js'

export default class Maquina extends Jugador{
    constructor(){
        super();
        super.setNombre('MÁQUINA');
    }

    obtenerNumeroDeJugadaRandom(){
        return Math.floor(Math.random() * 3)
    }
}