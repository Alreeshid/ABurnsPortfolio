import anime from 'anime-master/lib/anime.es.js';
const anime = require('animejs');
//Collection of general scripts

//experiment, animates based on how much the user has scrolled.
let home = document.getElementById("home");
window.onscroll = (e) => {
    e.stopPropagation();
    window.pageYOffset > 50 && console.log("do smh");
}

anime({
    targets: '#home',
    translateX: 100
});