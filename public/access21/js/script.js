// --- Hamburger Menu & Form Logic ---

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const menuToggle = document.getElementById('menuToggle');
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const menuLabel = document.querySelector('.menu-label');

  if (menuToggle && hamburgerMenu) {
    // Toggle menu on hamburger button click
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburgerMenu.classList.toggle('active');
    });

    // Toggle menu when "Menu" label is clicked
    if (menuLabel) {
      menuLabel.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburgerMenu.classList.toggle('active');
      });
    }

    // Close menu when clicking outside
    window.addEventListener('click', (e) => {
      if (hamburgerMenu.classList.contains('active') &&
          !hamburgerMenu.contains(e.target) &&
          e.target !== menuToggle &&
          e.target !== menuLabel &&
          !menuToggle.contains(e.target) &&
          !menuLabel.contains(e.target)) {
        hamburgerMenu.classList.remove('active');
      }
    });
  }

  // --- Contact Form Logic (mailto) ---
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const nameEl = document.getElementById("name");
      const emailEl = document.getElementById("email");
      const messageEl = document.getElementById("message");
      const subjectEl = document.getElementById("subject");

      if (nameEl && emailEl && messageEl) {
        const name = nameEl.value;
        const email = emailEl.value;
        const subject = subjectEl ? subjectEl.value : "Contact Form Submission";
        const message = messageEl.value;

        const mailtoLink =
          "mailto:aw.smith@live.com" +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            message
          );

        console.log('Form Submitted:', { name, email, subject, message });
        window.location.href = mailtoLink;
        contactForm.reset();
      }
    });
  }
});