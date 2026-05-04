// LOCATION
const modal = document.getElementById("locationModal");

window.onload = () => {
  const loc = localStorage.getItem("location");
  if(loc){
    applyLocation(loc);
    modal.style.display="none";
  }
};

function setLocation(loc){
  localStorage.setItem("location", loc);
  applyLocation(loc);
  modal.style.display="none";
}

function applyLocation(loc){
  document.getElementById("locationText").innerText = loc;
  document.getElementById("footerLocation").innerText = loc;
}

// RESERVE MODAL
function openReserve(){
  document.getElementById("reserveModal").classList.remove("hidden");
}
function closeReserve(){
  document.getElementById("reserveModal").classList.add("hidden");
}

// SCROLL REVEAL
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("active");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
