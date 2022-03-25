const body = document.querySelector('body');
const side_menu = document.querySelector('#menu__side');
const btn_menu = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const contenido = document.querySelector('.contenido');
const mensajePorcentaje = document.querySelector('#progreso__mensaje');
const barra = document.querySelector('.barra');

//Variables de los enlaces del menu
const enlaces = document.querySelectorAll('.enlacesPaginas');

let menuAbierto = false;

document.addEventListener('DOMContentLoaded', function(){

    btn_menu.addEventListener('click', abirMenu);
    irPagina();
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

    const barraPorcentaje = document.querySelector('.porcentaje');
    barraPorcentaje.style.width = `${porcentaje}%`;
}

function verificarMenu(){
    if(menuAbierto){
        actualizarPorcentaje();
    }
}

function irPagina(){
    enlaces.forEach(enlace=>{
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            noPagina = parseInt(enlace.dataset.pagina);
            
            visualizarPagina();

            //Cambiar el indicador del menu
            selectOpcion(noPagina);
        });
    });
}