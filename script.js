var libraries = [
    "https://p5js.org/",
    "https://d3js.org/",
    "https://threejs.org/",
    "http://momentjs.com/",
    "http://www.chartjs.org/",
    "https://vincentgarreau.com/particles.js/",
    "https://highlightjs.org/"
    ];
    
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener("click", function(){
    var i = getRandomInt(8);
    window.location = libraries[i];
});

