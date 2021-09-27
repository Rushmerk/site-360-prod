var vid = document.getElementById('v0'); // seleciona o elemento VIDEO
window.onscroll = function() {
    vid.currentTime = window.pageYOffset / 1000;
};