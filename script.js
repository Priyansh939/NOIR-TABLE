function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function selectCity(city){
  const result = document.getElementById("locationResult");

  result.innerHTML = `
    <strong>${city}</strong> selected<br>
    Reservation available
  `;
}
