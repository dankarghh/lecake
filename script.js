const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", e => {
  menu.classList.toggle("hidden");
});
