//1200: arrow too big
//1000: just right
//770: arrow & websites card cut off
//575: all terrible. This is where mobile starts

var jumbotron = document.querySelector(".jumbotron");
var appleCard = document.querySelector(".advert");
formTitle.style.fontSize = "2.5em";
googleForm.style.width = "30em";
window.addEventListener("resize", responsiveFunction);
hideDetails();
responsiveFunction();

function tinyJumbo() {
  topSection.style.backgroundSize = "100%";
  topSection.style.backgroundPosition = "0 0";
  jumbotron.style.top = "15em";
  jumbotron.style.width = "100%";
  jumbotron.style.float = "none";
  jumbotron.style.textAlign = "center";
}

function returnJumbo() {
  topSection.style.backgroundSize = "60%";
  topSection.style.backgroundPosition = "-10em 10em";
  jumbotron.style.top = "10em";
  jumbotron.style.width = "55%";
  jumbotron.style.float = "right";
  jumbotron.style.textAlign = "right";
}

homeButton.onclick = underConstruction;

function underConstruction() {
  alert("Coming soon. Site under construction. Check back later probably");
}

closeButton.onclick = hideDetails;

lpButton.deets = lpDetails;
staticButton.deets = staticDetails;
dynamicButton.deets = dynamicDetails;

lpButton.onclick = showDetails;
staticButton.onclick = showDetails;
dynamicButton.onclick = showDetails;



function hideDetails(){
  $(".mission").css("display", "none");
  $(".hiding").css("height", "0em");
  closeButton.style.display = "none";
}


function responsiveFunction() {
  var screenWidth = window.innerWidth;

  if (screenWidth > 1195){
    arrowArrow.style.width = "30%";
  } else if (screenWidth > 1000){
    arrowArrow.style.width = "40%";
    appleCard.style.display = "inline-block";
  } else if (screenWidth > 770){
    returnJumbo();
    googleForm.style.width = "30em";
    formTitle.style.fontSize = "2.5em";
    arrowArrow.style.width = "30%";
    arrowArrow.style.display = "inline-block";
    appleCard.style.display = "none";
  } else if (screenWidth < 770){
    tinyJumbo();
    googleForm.style.width = "100%";
    formTitle.style.fontSize = "1.5em";
    arrowArrow.style.display = "none";
  }
}


function showDetails(){
  closeButton.style.display = "block";
  this.deets.style.display = "block";
  if (this == lpButton) {
    staticDetails.style.display = "none";
    dynamicDetails.style.display = "none";
  } else if (this == staticButton) {
    lpDetails.style.display = "none";
    dynamicDetails.style.display = "none";
  } else if (this == dynamicButton) {
    lpDetails.style.display = "none";
    staticDetails.style.display = "none";
  }
  $(".hiding").css("height", "42em");
}
