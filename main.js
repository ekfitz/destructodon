var homeButton = document.getElementById("home-button");
var w = window.innerWidth;
var widthText = document.getElementById("aboutLink");
widthText.innerHTML = w;
var stego = document.getElementById("stego");


//stego responsive breaks
function moveStego() {
  if (w < 990){
    stego.style.top = 0em;
  }
}
