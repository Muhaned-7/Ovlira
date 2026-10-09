const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});