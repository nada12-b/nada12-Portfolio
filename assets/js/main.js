document.addEventListener('DOMContentLoaded', () => {
  // Fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});

// Loader (2s)
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.8s ease';
      setTimeout(() => loader.remove(), 800);
    }, 2000);
  }
});

// Typed.js animation
window.addEventListener('DOMContentLoaded', () => {
  if (window.Typed && document.getElementById('typed')) {
    new Typed('#typed', {
      strings: ['Cloud Computing', 'Virtualization', 'Big Data', 'DevOps', 'Innovation Digitale'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1200,
      loop: true
    });
  }
});

