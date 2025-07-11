document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.getElementById('ham');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('#menu .close'); // Assuming elements with class 'close' inside the mobile menu should close it

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked (if they have the class 'close')
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }

  // Smooth Scrolling for Navigation Links with class 'smooth-scroll'
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - (document.querySelector('nav').offsetHeight || 0), // Adjust for navbar height if fixed
          behavior: 'smooth'
        });

        // Close mobile menu after clicking a link (if it's open)
        if (menu && menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      }
    });
  });
});