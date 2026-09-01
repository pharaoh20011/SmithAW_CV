/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Initialize the motion typing effect
  var typed = new Typed("#typed-text", {
    strings: [
      "a Front-End Developer ",
      "a Graphic Designer",
      "a Tech Specialist",
      "Anthony Smith",
    ],
    typeSpeed: 50, // Speed in milliseconds to type a character
    backSpeed: 30, // Speed in milliseconds to backspace a character
    backDelay: 2000, // Time to wait before backspacing (2 seconds)
    loop: true, // Loop continuously
  });

  // Back to Top Button functionality
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (backToTopButton && window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else if (backToTopButton) {
      backToTopButton.classList.remove("show");
    }
  });

  if (backToTopButton) {
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link"),
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (
        navbarToggler &&
        window.getComputedStyle(navbarToggler).display !== "none"
      ) {
        navbarToggler.click();
      }
    });
  });
});
