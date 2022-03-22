const body = document.querySelector('body');
const side_menu = document.querySelector('#menu__side');
const btn_menu = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const contenido = document.querySelector('.contenido');
const mensajePorcentaje = document.querySelector('#progreso__mensaje');

document.addEventListener('DOMContentLoaded', function(){

    btn_menu.addEventListener('click', abirMenu);
});

function abirMenu() {
    body.classList.toggle('body__move');
    side_menu.classList.toggle('side__move');
    header.classList.toggle('menu_salida');
    contenido.classList.toggle('redimensionar');

    if(side_menu.classList.contains('side__move')){
        
        setTimeout(()=>{
            mensajePorcentaje.innerHTML = `
                75% Completado
            `;
        }, 260);
    }
    else{
        mensajePorcentaje.innerHTML = `
            <i class="fa-light fa-percent"></i>
        `;
    }
    
}