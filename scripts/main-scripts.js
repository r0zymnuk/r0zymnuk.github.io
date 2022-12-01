// Header video playback rate
document.querySelector('video').playbackRate = 0.6;


const body = document.getElementsByTagName('body')[0]

const nav = document.getElementById('head-nav');

var scrollBefore = 0
var progress = 0

window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;

    scroll <= 650 ? nav.classList.add('onTop') : nav.classList.remove('onTop')

});


function toggleDark() {
    
    document.body.classList.toggle("dark");

    toggleButton = document.getElementById('theme-toggle');

    if (document.body.classList.contains('dark')){
        toggleButton.innerHTML = '🌞'
    }
    else{
        toggleButton.innerHTML = '🌙'
    }

 }