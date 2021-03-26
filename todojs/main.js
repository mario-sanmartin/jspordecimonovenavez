document.addEventListener('DOMContentLoaded',()=>{
    const titulo = document.getElementById('title');
    const descripcion = document.getElementById('description');
    const boton = document.getElementById('add');
    const tablita = document.getElementById('table');
    const alert = document.getElementById('alert')
    let id = 1;


    function borrarId(id){
        console.log(id);
        document.getElementById(id).remove();
    }
     function addChalla(){
         if(titulo.value === '' || descripcion.value === ''){
            //  console.log('Title and description are required');
                alert.classList.remove('d-none');
                alert.innerText = 'Title and description are required'
             return;
            }
            alert.classList.add('d-none');
    
     
     //Creamos la columna de la tabla;
     const columna =tablita.insertRow();
     columna.setAttribute('id',id++) //id
     columna.innerHTML = `
     <td>${titulo.value}</td>
     <td>${descripcion.value}</td>
     <td class="text-center">
        <input type="checkbox"
     </td>
     <td class="text-right">
        <button class="btn btn-primary mb-1">
        <i class="fa fa-pencil"></i>
        </button>
     </td>   
     `
     const btnBorrar = document.createElement('button');
     btnBorrar.classList.add('btn','btn-danger','mb-1','ml-1');
     btnBorrar.innerHTML = '<i class="fa fa-trash"></i>';

     btnBorrar.onclick = (e) =>{
        borrarId(columna.getAttribute('id')) //el id de la fila
     }
     columna.children[3].appendChild(btnBorrar);
    }
     boton.onclick = addChalla;



});