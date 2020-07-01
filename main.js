hideDetails();

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
  closeButton.style.display = "none";
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
}
