// Inicializacion de JavaScript PennielSoft
document.addEventListener('DOMContentLoaded', function() {
    //menu responsivo lateral
    var elemento1 = document.querySelectorAll('.sidenav');
    var instancia1 = M.Sidenav.init(elemento1);
    //contenedor parallax
    var elemento2 = document.querySelectorAll('.parallax');
    var instancia2 = M.Parallax.init(elemento2);
});