// Attendre que tout soit chargé
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "1";
    loader.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 800);
    }, 1500);
  }
});

// Apparition progressive des sections (fade-in)
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

// Typed.js pour le texte animé
document.addEventListener("DOMContentLoaded", () => {
  if (window.Typed && document.getElementById("typed")) {
    new Typed("#typed", {
      strings: [
        "Cloud Computing",
        "Virtualization",
        "DevOps",
        "Big Data",
        "Innovation Digitale",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1200,
      loop: true,
    });
  }
});
