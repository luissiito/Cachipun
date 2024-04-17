
const urlBase = window.location.protocol + '//' + window.location.host

export default class Modal{
    constructor(){
        this.contenedor = document.createElement('div')
        this.titulo = document.createElement('h2')
        this.tituloDerrotas = document.createElement('h3')
        this.tituloEmpates = document.createElement('h3')
        this.tituloVictorias = document.createElement('h3')
        this.botonEntendido = document.createElement('button')
        this.getTitulo().textContent = 'TUS RESULTADOS'
        this.armar()
        this.prepararBotonEntendido()
    }

    getContenedor(){ return this.contenedor }
    getTitulo(){ return this.titulo }
    getTituloDerrotas(){ return this.tituloDerrotas }
    getTituloEmpates(){ return this.tituloEmpates }
    getTituloVictorias(){ return this.tituloVictorias }
    getBotonEntendido(){ return this.botonEntendido }

    añadirEventoClickAlBotonEntendido(){
        this.getBotonEntendido().addEventListener('click', ()=>{
            this.getContenedor().remove()
            this.recargarPagina()
        })
    }
    añadirClaseCssModalAlContenedor(){
        this.getContenedor().classList.add('modal')
    }
    añadirClasesCssAlBotonEntendido(){
        this.getBotonEntendido().className += 'boton botonEntendido'
    }

    armar(){
        this.getContenedor().append(this.getTitulo(), this.getTituloVictorias(), this.getTituloDerrotas(),
                                    this.getTituloEmpates(), this.getBotonEntendido())
    }

    cargarInformacionAlModal(victorias, derrotas, empates){
        this.getTituloVictorias().textContent = `VICTORIAS : ${victorias}`
        this.getTituloDerrotas().textContent = `DERROTAS : ${derrotas}`
        this.getTituloEmpates().textContent = `EMPATES : ${empates}`
    }

    mostrar(){
        document.querySelector('body').appendChild(this.getContenedor())
    }

    prepararBotonEntendido(){
        this.getBotonEntendido().textContent = 'ENTENDIDO'
        this.añadirEventoClickAlBotonEntendido()
        this.añadirClaseCssModalAlContenedor()
        this.añadirClasesCssAlBotonEntendido()
    }

    recargarPagina(){        
        window.location.href = `${urlBase}/index.html`
    }
}