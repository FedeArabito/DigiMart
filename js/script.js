const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navi__menu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("activo");
  navMenu.classList.toggle("activo");

})

document.querySelectorAll(".navi-item", ".home").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("activo");
    navMenu.classList.remove("activo");

  }))


