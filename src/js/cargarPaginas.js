//Variables de botones de navegación
const btnAtras = $('#atras');
const btnAdelante = $('#adelante');
const btnHome = $('#home');
let noPagina = 0;
let porcentaje;

//Clase botones
class BotonesNavegacion{
    
    sigPagina(){
        if(noPagina < paginas.length - 1){
            noPagina++;
            selectOpcion(noPagina);
            visualizarPagina();
        }
        else{
            console.log('No hay más páginas');
        }
    }
    
    atrasPaginas(){
        if(noPagina > 0){
            noPagina--;
            selectOpcion(noPagina);
            visualizarPagina();
        }
        else{
            console.log('Estas en inicio');
        }
    }

    home(){
        noPagina = 0;
        selectOpcion(noPagina);
        visualizarPagina();
    }
}

//Iniciar funciones------------------------------------------------
jQuery(function($){
    
    //Visualizar página actual
    visualizarPagina();

    //Instanciar Clase Botones Navegacion
    const btnNav = new BotonesNavegacion;

    //Botones de navegación
    btnAdelante.on('click', btnNav.sigPagina);
    btnAtras.on('click', btnNav.atrasPaginas);
    btnHome.on('click', btnNav.home);
})

//Funciones----------------------------------------------------------

function visualizarPagina(){
    const contenedor = $('#cont-paginas');
    const url = 'contenido/'+paginas[noPagina].ruta;
    const titulo = paginas[noPagina].nombre;

    //Cambiar el titulo de la página
    const headingTitulo = $('.header h1');
    headingTitulo.empty();
    headingTitulo.text(titulo);

    //Actualizar el porcentaje del progreso
    const totalPaginas = paginas.length;
    const porcentajePorPagina = 100 / totalPaginas;
    porcentaje = porcentajePorPagina * paginas[noPagina].progreso;
    verificarMenu();

    //Cargar página
    contenedor.empty();
    abrirURL(url, contenedor);

    function abrirURL(url, contenedor) {  
        $.get(url, {}, function(data){
            contenedor.html(data);

            //Script de la página actual
            drop();
        });
    }
}

//Cambiar el indicador del menu
function selectOpcion(noPagina){
    
    const select = document.querySelector('.select');
    select.classList.remove('select');

    enlaces[noPagina].classList.add('select');
}