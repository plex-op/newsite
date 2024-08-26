// show menu

const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("side-bar"),
  navClose = document.getElementById("close-bar");

// menu show

navToogle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
