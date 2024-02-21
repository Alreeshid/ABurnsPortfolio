//import anime from 'anime-master/lib/anime.es.js';
const anime = require('animejs');
//Collection of general scripts

//experiment, animates based on how much the user has scrolled.
let home = document.getElementById("home");
window.onscroll = (e) => {
    e.stopPropagation();
    window.pageYOffset > 50 && console.log("do smh");
}

let animation = anime({
    targets: 'div',
    // Properties 
    translateX: 100,
    borderRadius: 50,
    // Property Parameters
    duration: 2000,
    easing: 'linear',
    // Animation Parameters
    direction: 'alternate'
  });  