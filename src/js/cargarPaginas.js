jQuery(function($){

    const contenedor = $('#cont-paginas');
    const url = 'contenido/pag03.html';

    abrirURL(url, contenedor);

    function abrirURL(url, contenedor) {  
        $.get(url, {}, function(data){
            contenedor.html(data);
        });
    }
})