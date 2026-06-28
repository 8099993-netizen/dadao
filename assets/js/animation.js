```javascript id="a9kq3m"
/**
 * DADAO - Animation System
 * Vercel / Linear Style Motion Engine
 * Lightweight + Scroll-driven UX
 */

// =====================
// 1. SCROLL REVEAL SYSTEM
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".card, .section, h1, h2, .hero").forEach(el => {
  el.classList.add("fade-init");
  observer.observe(el);
});

// =====================
// 2. SMOOTH PARALLAX HERO
// =====================
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrollY * 0.2}px) translateX(-50%)`;
  }
});

// =====================
// 3. NAVBAR BLUR ON SCROLL
// =====================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 20) {
    header.style.background = "rgba(13, 17, 23, 0.85)";
    header.style.backdropFilter = "blur(18px)";
    header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
  } else {
    header.style.background = "rgba(13, 17, 23, 0.6)";
  }
});

// =====================
// 4. COUNTER ANIMATION (STATS)
// =====================
const counters = document.querySelectorAll(".stats h3");

const animateCounter = (el) => {
  const target = parseInt(el.innerText.replace(/\D/g, ""));
  let count = 0;
  const speed = target / 60;

  const update = () => {
    count += speed;
    if (count < target) {
      el.innerText = Math.floor(count) + "+";
      requestAnimationFrame(update);
    } else {
      el.innerText = target + "+";
    }
  };

  update();
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => statsObserver.observe(c));

// =====================
// 5. FAQ ACCORDION
// =====================
document.querySelectorAll(".faq .item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// =====================
// 6. BUTTON MICRO INTERACTIONS
// =====================
document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-2px) scale(1.02)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0) scale(1)";
  });
});

// =====================
// 7. FADE-IN CLASS SYSTEM (CSS HOOK)
// =====================
const style = document.createElement("style");
style.innerHTML = `
.fade-init {
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.is-visible {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(style);

// =====================
// 8. HERO SOFT FLOAT EFFECT
// =====================
const hero = document.querySelector(".hero-content");

if (hero) {
  let float = 0;

  const animate = () => {
    float += 0.003;

    hero.style.transform = `translateY(${Math.sin(float) * 6}px)`;
    requestAnimationFrame(animate);
  };

  animate();
}
```
