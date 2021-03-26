import AddTodo from './components/add-todo.js';
import Modal from './components/ventana.js';

export default class Vista {
    constructor() {
        this.modelo = null;
        this.tablita = document.getElementById('table')

        this.addTodoForm = new AddTodo();
        this.modal = new Modal();
        // boton.onclick = ()=>{
        //     this.addTodo('titulo','desc')
        // }
        this.addTodoForm.onClick((titulo, descripcion) => this.addTodo(titulo, descripcion));
        this.modal.onClick((id, values) => this.EditarTodo(id, values));
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }


    render() {
        const todos = this.modelo.getTodosModelo();
        todos.forEach((todo) => this.crearColumna(todo));
    }
    addTodo(titulo, descripcion) {
        // console.log(titulo,descripcion);
        const todo = this.modelo.addTodo(titulo, descripcion)
        this.crearColumna(todo)
    }

    borrarTodo(id) {
        this.modelo.borrarTodoModelo(id)
        document.getElementById(id).remove();
    }
    accionCompletar(id) {
        this.modelo.accionCompletarModelo(id)
    }

    EditarTodo(id,values){
        this.modelo.editarTodoModelo(id,values);
        const fila = document.getElementById(id);
        fila.children[0].innerText = values.titulo;
        fila.children[1].innerText = values.descripcion;
        fila.children[2].children[0].checked = values.completed;
    }
    crearColumna(todo) {
        //Creamos la columna de la tabla;
        const columna = table.insertRow();
        columna.setAttribute('id', todo.id) //id
        columna.innerHTML = `
     <td>${todo.titulo}</td>
     <td>${todo.descripcion}</td>
     <td class="text-center">
     </td>
     <td class="text-right">
     </td>   
     `;

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.checked = todo.completed;
        check.onclick = () => this.accionCompletar(todo.id)
        columna.children[2].appendChild(check)

        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btn', 'btn-primary', 'mb-1');
        btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
        //mostrar Modal
        btnEditar.setAttribute('data-toggle', 'modal');
        btnEditar.setAttribute('data-target', '#modal');

        // btnEditar.onclick = () => this.modal.datos(todo)
        btnEditar.onclick = () => this.modal.datos({
            id:todo.id,
            titulo: columna.children[0].innerText,
            descripcion: columna.children[1].innerText,
            completed: columna.children[2].children[0].checked,
        })
        columna.children[3].appendChild(btnEditar);

        const btnBorrar = document.createElement('button');
        btnBorrar.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        btnBorrar.innerHTML = '<i class="fa fa-trash"></i>';
        btnBorrar.onclick = () => this.borrarTodo(todo.id);
        columna.children[3].appendChild(btnBorrar);
    }



}