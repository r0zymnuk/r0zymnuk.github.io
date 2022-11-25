const body = document.getElementsByTagName('body')[0]

const nav = document.getElementById('nav');

const scrollProgressBar = document.getElementById('page-scroll-progress-bar')

const scrollProgressMax = document.body.scrollHeight - document.documentElement.clientHeight

var scrollBefore = 0
var progress = 0

window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;

    progress = scroll / scrollProgressMax

    scrollProgressBar.style.width = (progress * 100) + '%'

    scroll <= 10 ? nav.classList.add('nav-top') : nav.classList.remove('nav-top')

    // console.log(scrollBefore + '    ->  ' + scroll)
    scrollBefore = scroll

});

let bgRandButtons = document.getElementsByClassName('bg-rand-b')

document.body.style.backgroundColor = "white";

var rgb = [255,255,255]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function changeBodyBg(button_n){
    rgb[button_n] = getRandomInt(255)
    document.body.style.backgroundColor = 'rgb(' + rgb.join(', ') + ')';
    console.log()
}