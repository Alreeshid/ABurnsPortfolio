//Collection of general scripts

//Theory tester, animates based on how much the user has scrolled.
const home = document.getElementById("home");
home.addEventListener('wheel', function(event) {
    const y = event.deltaY;
    //element.style.transform = `translateY(${delta}px)`;
});
