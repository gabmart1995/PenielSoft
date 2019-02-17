// Inicializacion de componentes de Materialize en JavaScript
document.addEventListener('DOMContentLoaded', function() {
    //menu responsivo lateral
    var elemento1 = document.querySelectorAll('.sidenav');
    var instancia1 = M.Sidenav.init(elemento1);
    //contenedor parallax
    var elemento2 = document.querySelectorAll('.parallax');
    var instancia2 = M.Parallax.init(elemento2);
    //menu collapsable
    var elemento3 = document.querySelectorAll('.collapsible');
    var instancia3 = M.Collapsible.init(elemento3);
    //ventana modal
    var elemento4 = document.querySelectorAll('.modal');
    var instancia4 = M.Modal.init(elemento4);
    //floating button
    var elemento5 = document.querySelectorAll('.fixed-action-btn');
    var instancia5 = M.FloatingActionButton.init(elemento5, {
        hoverEnabled: false
    });
    //galeria slider
});