import Modelo from './modelo.js';
import Vista from './vista.js';
document.addEventListener('DOMContentLoaded',()=>{

    const modelo = new Modelo();
    const vista = new Vista();

    modelo.setVista(vista);
    vista.setModelo(modelo)
    //llamamos a la funcion render de la vista
    vista.render();


    // function test (num,f){
    //     return f(num)
    // }

    // function dup(num){
    //     return num * 2;
    // }

    // const res = test(5,dup);
    // console.log(res);

    // test(5,(num)=>{
    //     return num * 2;
    // })

});