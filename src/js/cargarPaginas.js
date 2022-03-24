//Variables de botones de navegación
const btnAtras = $('#atras');
const btnAdelante = $('#adelante');
const btnHome = $('#home');
let noPagina = 0;
let porcentaje;

//Clase botones
class BotonesNavegacion{
    
    sigPagina(){
        if(noPagina < 3){
            noPagina++;
            visualizarPagina();
        }
        else{
            console.log('No hay más páginas');
        }
    }
    
    atrasPaginas(){
        if(noPagina > 0){
            noPagina--;
            visualizarPagina();
        }
        else{
            console.log('Estas en inicio');
        }
    }

    home(){
        noPagina = 0;
        visualizarPagina();
    }
}

//Objeto con la información de las páginas--------------------------------
const paginas = [
    {
        nombre: 'Bienvenida',
        ruta: 'pag01.html', 
        progreso: 1
    },
    {
        nombre: 'Antecedentes y conceptos PLD y CFT', 
        ruta: 'pag02.html', 
        progreso: 2
    },
    {
        nombre: 'Actividad de reforzamiento', 
        ruta: 'pag03.html', 
        progreso: 3
    },
    {
        nombre: 'Evaluación final', 
        ruta: 'pag04.html', 
        progreso: 4
    },
]


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
    const barraPorcentaje = $('.porcentaje');
    porcentaje = 25 * paginas[noPagina].progreso;
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