
// Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
    })
  }, {threshold: .12});
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
});

// Loader (2s)
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader){
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(()=> loader.remove(), 350);
    }, 2000); // 2s
  }
});

// Typed.js
document.addEventListener('DOMContentLoaded', () => {
  if (window.Typed && document.getElementById('typed')) {
    new Typed('#typed', {
      strings: ['Cloud Computing','Virtualisation','Big Data','DevOps','AI Solutions','Innovation Digitale'],
      typeSpeed: 45, backSpeed: 25, backDelay: 1100, loop: true
    });
  }
});
