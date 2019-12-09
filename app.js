var nav = document.querySelector('#navig'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();
    if (window.scrollY >= 300) { // Just an example
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // or default color
    } else {
        nav.style.backgroundColor = 'transparent';
    };

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navig").style.top = "0";
    document.getElementById("navig").style.transition = "0.3s ease-in-out";
  } else {
    document.getElementById("navig").style.top = "-70px";
    document.getElementById("navig").style.transition = "0.3s ease-in-out";
  }
  prevScrollpos = currentScrollPos;
}


var vidos = document.getElementById("video");

var vidos2 = document.getElementById("video1");
function playPause() {
    if (vidos.play) {
        console.log("asd")
        vidos.pause()
    } else if(vidos.pause()) {
        vidos.play();
        console.log("asdad")
    }
}
function playPause1() {
  if (vidos2.play) {
      console.log("asd")
      vidos2.pause()
  } else if(vidos.pause()) {
      vidos2.play();
      console.log("asdad")
  }
}