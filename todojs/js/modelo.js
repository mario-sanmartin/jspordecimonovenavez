export default class Modelo{
    constructor(){
        this.vista = null;
        this.todos =  JSON.parse(localStorage.getItem('todos')); //obtener en formato datos desde el local parse es analizar sintacticamente para que te lo de
        if(!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id:0,
                    titulo:'No tengo nada',
                    descripcion:'No tengo nada',
                    completed: false
                }
            ]
        this.currentId= 1;
    }else{
        this.currentId = this.todos[this.todos.length -1].id + 1;
        }
    }

    setVista(vista){
        this.vista = vista;
    }

    guardarLocalStorage(){
            localStorage.setItem('todos',JSON.stringify(this.todos));
    }
    getTodosModelo(){
        //aqui devolvemos una copia de nuestra lista gracias a Map
        return this.todos.map((todo)=>({...todo}));
    }

    buscarId(id){
      //Busca el id dentro del array le pasamos el item y le decimos que busque el id de ese item en nuestro array en este caso todos
        return this.todos.findIndex((todo)=> todo.id === id);
    }
    accionCompletarModelo(id){
        // console.log(id);
        const indice = this.buscarId(id);
        const todo = this.todos[indice];
        todo.completed = !todo.completed;
        // aqui invertimos el value del completed,
        // si es falso pasa a verdadero si es verdadero pasa a falso como el toggle de js
        console.log(this.todos);
        this.guardarLocalStorage();
    }    


    editarTodoModelo(id,values){
        const indice = this.buscarId(id);
        //Solo cambiara lo que se ingrese en el modal
        Object.assign(this.todos[indice],values);
        this.guardarLocalStorage();
    }

    addTodo(titulo,descripcion){
        // console.log(titulo + descripcion);
        const todo={
            id:this.currentId++,
            titulo,
            descripcion,
            completed: false
        }
        this.todos.push(todo);
        console.log(this.todos);

        this.guardarLocalStorage();

        return{...todo} //clon
    }

    borrarTodoModelo(id){
        const index = this.buscarId(id)
        // console.log(this.todos[index]);
        this.todos.splice(index,1); 
        // indice y apartir de el indice cuantos elementos quiero borrar
        this.guardarLocalStorage();

    }
}