const revealElements = document.querySelectorAll(
  ".fade-up, .slide-left, .slide-right, .zoom-in"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // reveal only once
      }
    });
  },
  {
    threshold: 0.2, // 20% visible then animate
  }
);

revealElements.forEach((el) => observer.observe(el));

/* =============================
   TYPEWRITER (Smooth Version)
============================= */
const roles = [
  "Data Scientist",
  "Data Analytics",
  "Business Analytics",
];

const typeEl = document.getElementById("typewriter-text");
let roleIndex = 0;
let charIndex = 0;

function type() {
  const current = roles[roleIndex];
  typeEl.textContent = current.slice(0, charIndex);

  charIndex++;

  if (charIndex <= current.length) {
    setTimeout(type, 75);
  } else {
    setTimeout(() => {
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      type();
    }, 900);
  }
}

type();

/* =============================
   SMOOTH SCROLLING FOR NAVIGATION
============================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* =============================
   NAVBAR SCROLL EFFECT
============================= */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.9)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.55)';
  }
});

/* =============================
   LOADING ANIMATION
============================= */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
