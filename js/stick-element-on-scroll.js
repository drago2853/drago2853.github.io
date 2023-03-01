
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbarSticky = document.getElementById("navbarElement");

// Get the offset position of the navbar
var sticky = navbarSticky.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 100) {
    navbarSticky.classList.add("sticky")
  } else {
    navbarSticky.classList.remove("sticky");
  }
}