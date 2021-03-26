export default class Alert{
    constructor(mensajeId){
        this.mensaje = document.getElementById(mensajeId);
    }

    mostrarMensaje(message){
        this.mensaje.classList.remove('d-none');
        this.mensaje.innerText = message;
    }

    ocultarMensaje(){
        this.mensaje.classList.add('d-none');
    }
}