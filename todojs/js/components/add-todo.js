import Alert from './alert.js';
export default class AddTodo {
    constructor() {
        this.boton = document.getElementById('add');
        this.titulo = document.getElementById('title');
        this.descripcion = document.getElementById('description');

        this.mensajito = new Alert('alert');
    }



    onClick(callback) {
        this.boton.onclick = () => {
            if (this.titulo.value === '' || this.descripcion.value === '') {
                //  console.log('Title and description are required');
                // alert.classList.remove('d-none');
                // alert.innerText = 'Title and description are required'
                // return;
               this.mensajito.mostrarMensaje('Title and description are required');
            }else{
                this.mensajito.ocultarMensaje();
                callback(this.titulo.value, this.descripcion.value);
            }
        }
    }
}