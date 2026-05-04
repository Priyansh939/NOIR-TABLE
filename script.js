// LOCATION SELECTOR
const modal = document.getElementById("locationModal");

window.onload = () => {
  const saved = localStorage.getItem("location");
  if(saved){
    applyLocation(saved);
    modal.style.display = "none";
  }
};

function setLocation(loc){
  localStorage.setItem("location", loc);
  applyLocation(loc);
  modal.style.display = "none";
}

function applyLocation(loc){
  document.getElementById("locationText").innerText = loc;
  document.getElementById("footerLocation").innerText = loc;
}
