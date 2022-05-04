const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const menuOpener = document.getElementById("menu-opener");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("drop-shadow-md");
    navbar.classList.add("py-5");
    navbar.classList.add("lg:py-8");
  } else {
    navbar.classList.remove("drop-shadow-md");
    navbar.classList.remove("py-5");
    navbar.classList.remove("lg:py-8");
  }
});

menuOpener.addEventListener("click", (e) => {
  menu.classList.toggle("hidden");
  navbar.classList.toggle("drop-shadow-md");
  menuOpener.classList.toggle("open");
});