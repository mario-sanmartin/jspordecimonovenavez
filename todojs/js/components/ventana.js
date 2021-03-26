import Alert from './alert.js';
export default class Modal {
    constructor() {
        this.tituloModal = document.getElementById('modal-title');
        this.descripcionModal = document.getElementById('modal-description');
        this.botonModal = document.getElementById('modal-btn');
        this.completedModal = document.getElementById('modal-completed');
        this.mensajito = new Alert('modal-alert');
        this.todo = null;
    }

    datos(todo){
        this.todo = todo;
        this.tituloModal.value = todo.titulo;
        this.descripcionModal.value = todo.descripcion;
        this.completedModal.checked = todo.completed;
    }

    onClick(callback) {
        this.botonModal.onclick = () => {
            if (!this.tituloModal.value  || !this.descripcionModal.value === '') {
                //  console.log('Title and description are required');
                // alert.classList.remove('d-none');
                // alert.innerText = 'Title and description are required'
                // return;
                this.mensajito.mostrarMensaje('Title and description are required');
                return;
            }
            $('#modal').modal('toggle');
            callback(this.todo.id,{
                titulo: this.tituloModal.value,
                descripcion: this.descripcionModal.value,
                completed: this.completedModal.checked
            });
        }
    }
}