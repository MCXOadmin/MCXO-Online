document.addEventListener("DOMContentLoaded", function () {
    // Get the hamburger button and the navigation links
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle the 'show' class on the nav links when the hamburger button is clicked
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  