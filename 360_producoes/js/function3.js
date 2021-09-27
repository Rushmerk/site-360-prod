// select video element
var vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function() {
    vid.currentTime = window.pageYOffset / 400;
    vid.pause();
};

document.getElementById('play').onclick = function() {
    vid.play();
}
document.getElementById('pause').onclick = function() {
    vid.pause();
    window.scrollTo(0, vid.currentTime * 400);
}