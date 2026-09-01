(function () {
  "use strict";

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("[data-nav-link]");

  navLinks.forEach((link) => {
    const target = link.getAttribute("href");
    if (target === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Back to Top Button Logic
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
})();

