// === script.js ===

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  // --- OUVERTURE / FERMETURE DU MENU BURGER ---
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // --- SCROLL FLUIDE VERS LES SECTIONS ---
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('active');
    });
  });

  // --- ANIMATION D’APPARITION DES BLOCS AU SCROLL ---
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  // cibler les éléments à animer
  document.querySelectorAll('.coffee-item, .atelier-text, .gallery-grid img, .hero-content').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
});
