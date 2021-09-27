// selecionar o elemento do video
var vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // variante com jQuery

// pausar o video ao inicio
vid.pause();

// pausar o video ao detectar um scroll (para impedir auto-play)
window.onscroll = function() {
    vid.pause();
};

// procurar, a cada 40 milisegundos, o scroll atual da página e mostrar a frame com esse numero/400
setInterval(function() {
    vid.currentTime = window.pageYOffset / 400;
}, 40);