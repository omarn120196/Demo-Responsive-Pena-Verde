const body = document.querySelector('body');
const side_menu = document.querySelector('#menu__side');
const btn_menu = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const contenido = document.querySelector('.contenido');
const mensajePorcentaje = document.querySelector('#progreso__mensaje');
const barra = document.querySelector('.barra');

let menuAbierto = false;

document.addEventListener('DOMContentLoaded', function(){

    btn_menu.addEventListener('click', abirMenu);
});

function abirMenu() {
    side_menu.classList.toggle('side__move');
    header.classList.toggle('menu_salida');
    contenido.classList.toggle('redimensionar');
    barra.classList.toggle('barra_ver');

    if(!menuAbierto){
        menuAbierto = true;
    }
    else{
        menuAbierto = false;
    }

    if(side_menu.classList.contains('side__move')){
        
        setTimeout(()=>{
            actualizarPorcentaje();
        }, 260);
    }
    else{
        mensajePorcentaje.innerHTML = `
            <i class="fa-light fa-percent"></i>
        `;
    }
    
}

function actualizarPorcentaje(){
    mensajePorcentaje.innerHTML = `
        ${porcentaje}% Completado
    `;
}

function verificarMenu(){
    if(menuAbierto){
        actualizarPorcentaje();
    }
}