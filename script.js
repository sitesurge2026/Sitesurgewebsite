// SiteSurge – mobile menu, portfolio modal, scroll animations
(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
  }

  // Scroll-triggered animations for sections
  const animatedSections = document.querySelectorAll('.scroll-animate');
  if (animatedSections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );
    animatedSections.forEach(function (el) {
      observer.observe(el);
    });
  }


})();
