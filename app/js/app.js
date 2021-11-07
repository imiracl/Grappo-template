// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  let burger = document.getElementById("menu-burger__head");
  let nav = document.getElementById("nav");
  let body = document.getElementById("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open-menu");
    nav.classList.toggle("open-menu");
    body.classList.toggle("fixed-page");
  });
});
