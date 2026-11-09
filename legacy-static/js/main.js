/* =============================================
   MAIN.JS — EXHORTE MBOUMBA PORTFOLIO
   Loader | Navbar | Typing | Particles
   Scroll Animations | Counters | Skills
   Dark Mode | Form | Filters | Back to Top
   ============================================= */

'use strict';

// ============================================
// 1. THEME MANAGER (Dark / Light Mode)
// ============================================
const ThemeManager = (() => {
  const html = document.documentElement;
  const btn  = document.getElementById('themeToggle');
  const KEY  = 'portfolio-theme';

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
  }

  function init() {
    const saved = localStorage.getItem(KEY) || 'dark';
    applyTheme(saved);

    btn?.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  return { init };
})();

// ============================================
// 2. LOADER
// ============================================
const Loader = (() => {
  function init() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
      }, 1600);
    });
  }
  return { init };
})();

// ============================================
// 3. NAVBAR — Scroll + Active Link + Mobile
// ============================================
const Navbar = (() => {
  let lastScroll = 0;

  function init() {
    const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    const links     = document.querySelectorAll('.nav-link');

    // Scroll behaviour
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 40) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
      lastScroll = scrollY;
      highlightActiveLink();
    }, { passive: true });

    // Hamburger
    hamburger?.addEventListener('click', () => {
      const isOpen = navLinks?.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
        hamburger?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
      });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');
    let current    = '';

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 150) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  return { init };
})();

// ============================================
// 4. TYPING EFFECT (Hero)
// ============================================
const TypingEffect = (() => {
  const words  = [
    'Full-Stack Developer',
    'React / Next.js Expert',
    'Spring Boot Engineer',
    'Dashboard Builder',
    'API Designer',
    'Django Developer',
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeNext() {
    const el    = document.getElementById('typingText');
    if (!el) return;

    const word    = words[wordIndex];
    const speed   = isDeleting ? 60 : 110;
    const pause   = isDeleting ? 80 : 2000;

    if (!isDeleting) {
      el.textContent = word.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === word.length) {
        isDeleting = true;
        setTimeout(typeNext, pause);
        return;
      }
    } else {
      el.textContent = word.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex  = (wordIndex + 1) % words.length;
        setTimeout(typeNext, 400);
        return;
      }
    }

    setTimeout(typeNext, speed);
  }

  function init() {
    setTimeout(typeNext, 1800);
  }

  return { init };
})();

// ============================================
// 5. PARTICLES (Hero background)
// ============================================
const Particles = (() => {
  function createParticle(container) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size     = Math.random() * 4 + 2;
    const left     = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay    = Math.random() * 10;

    Object.assign(p.style, {
      width:           `${size}px`,
      height:          `${size}px`,
      left:            `${left}%`,
      top:             '-10px',
      animationDuration: `${duration}s`,
      animationDelay:   `-${delay}s`,
      opacity:          '0',
    });

    container.appendChild(p);
  }

  function init() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 25; i++) createParticle(container);
  }

  return { init };
})();

// ============================================
// 6. SCROLL ANIMATIONS (IntersectionObserver)
// ============================================
const ScrollAnimations = (() => {
  function init() {
    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Trigger skill bars when skills section visible
          if (entry.target.closest('#skills')) {
            AnimateSkills.triggerBars();
          }
          // Trigger counters when about section visible
          if (entry.target.closest('#about')) {
            CounterAnimation.start();
          }
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }
  return { init };
})();

// ============================================
// 7. COUNTER ANIMATION (Stats in About)
// ============================================
const CounterAnimation = (() => {
  let started = false;

  function animateCounter(el) {
    const target  = parseInt(el.getAttribute('data-count'), 10);
    const duration = 2000;
    const step    = target / (duration / 16);
    let current   = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
  }

  function start() {
    if (started) return;
    started = true;
    document.querySelectorAll('[data-count]').forEach(animateCounter);
  }

  return { start };
})();

// ============================================
// 8. SKILL BARS ANIMATION
// ============================================
const AnimateSkills = (() => {
  let triggered = false;

  function triggerBars() {
    if (triggered) return;
    triggered = true;
    document.querySelectorAll('.skill-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      requestAnimationFrame(() => {
        bar.style.width = `${width}%`;
      });
    });
  }

  // Also use a separate observer for the skills section specifically
  function init() {
    const section = document.getElementById('skills');
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        triggerBars();
      }
    }, { threshold: 0.2 });

    observer.observe(section);
  }

  return { init, triggerBars };
})();

// ============================================
// 9. PROJECT FILTER
// ============================================
const ProjectFilter = (() => {
  function init() {
    const buttons  = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projects.forEach(project => {
          const category = project.getAttribute('data-category');
          const matches  = filter === 'all' || category === filter;

          if (matches) {
            project.style.display = '';
            setTimeout(() => {
              project.style.opacity   = '1';
              project.style.transform = 'translateY(0)';
            }, 50);
          } else {
            project.style.opacity   = '0';
            project.style.transform = 'translateY(20px)';
            setTimeout(() => {
              project.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  return { init };
})();

// ============================================
// 10. CONTACT FORM (with localStorage save)
// ============================================
const ContactForm = (() => {
  function validate(form) {
    let valid = true;

    const fields = [
      { id: 'contactName',    errorId: 'nameError',    label: 'Le nom',     min: 2 },
      { id: 'contactSubject', errorId: 'subjectError', label: 'Le sujet',   min: 3 },
      { id: 'contactMessage', errorId: 'messageError', label: 'Le message', min: 10 },
    ];

    // Email separately
    const emailEl  = document.getElementById('contactEmail');
    const emailErr = document.getElementById('emailError');
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    clearErrors();

    fields.forEach(({ id, errorId, label, min }) => {
      const el  = document.getElementById(id);
      const err = document.getElementById(errorId);
      if (!el || !err) return;

      if (!el.value.trim()) {
        err.textContent = `${label} est requis.`;
        el.closest('.form-group')?.classList.add('error');
        valid = false;
      } else if (el.value.trim().length < min) {
        err.textContent = `${label} doit contenir au moins ${min} caractères.`;
        el.closest('.form-group')?.classList.add('error');
        valid = false;
      }
    });

    if (!emailEl?.value.trim()) {
      if (emailErr) emailErr.textContent = "L'email est requis.";
      emailEl?.closest('.form-group')?.classList.add('error');
      valid = false;
    } else if (!emailReg.test(emailEl.value.trim())) {
      if (emailErr) emailErr.textContent = "Veuillez entrer un email valide.";
      emailEl?.closest('.form-group')?.classList.add('error');
      valid = false;
    }

    return valid;
  }

  function clearErrors() {
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group.error').forEach(el => el.classList.remove('error'));
  }

  function init() {
    const form      = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const success   = document.getElementById('formSuccess');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validate(form)) return;

      // Show loading state
      const btnText    = submitBtn?.querySelector('.btn-text');
      const btnLoading = submitBtn?.querySelector('.btn-loading');
      if (btnText) btnText.hidden = true;
      if (btnLoading) btnLoading.hidden = false;
      if (submitBtn) submitBtn.disabled = true;

      // Simulate sending (save to localStorage as fallback)
      const message = {
        name:    document.getElementById('contactName')?.value.trim(),
        email:   document.getElementById('contactEmail')?.value.trim(),
        subject: document.getElementById('contactSubject')?.value.trim(),
        message: document.getElementById('contactMessage')?.value.trim(),
        date:    new Date().toISOString(),
      };

      // Store message
      try {
        const saved = JSON.parse(localStorage.getItem('portfolio-messages') || '[]');
        saved.push(message);
        localStorage.setItem('portfolio-messages', JSON.stringify(saved));
      } catch (_) {}

      await new Promise(res => setTimeout(res, 1800));

      // Show success
      form.reset();
      if (btnText) btnText.hidden = false;
      if (btnLoading) btnLoading.hidden = true;
      if (submitBtn) submitBtn.disabled = false;
      if (success) {
        success.hidden = false;
        success.style.display = 'flex';
        setTimeout(() => {
          success.hidden = true;
          success.style.display = '';
        }, 5000);
      }
    });

    // Real-time validation feedback
    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('blur', () => {
        const group = el.closest('.form-group');
        if (el.value.trim()) {
          group?.classList.remove('error');
          const errId = el.id.replace('contact', '').toLowerCase() + 'Error';
          const err = document.getElementById(errId);
          if (err) err.textContent = '';
        }
      });
    });
  }

  return { init };
})();

// ============================================
// 11. BACK TO TOP
// ============================================
const BackToTop = (() => {
  function init() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  return { init };
})();

// ============================================
// 12. PARALLAX HERO (subtle)
// ============================================
const ParallaxHero = (() => {
  function init() {
    const orbs = document.querySelectorAll('.hero-orb');
    if (!orbs.length) return;

    window.addEventListener('mousemove', (e) => {
      const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 12;
        orb.style.transform = `translate(${xRatio * factor}px, ${yRatio * factor}px)`;
      });
    }, { passive: true });
  }
  return { init };
})();

// ============================================
// 13. GLOW EFFECT ON PROJECT CARDS
// ============================================
const GlowCards = (() => {
  function init() {
    const cards = document.querySelectorAll('.project-card, .service-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect  = card.getBoundingClientRect();
        const x     = e.clientX - rect.left;
        const y     = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }
  return { init };
})();

// ============================================
// 14. ACTIVE SECTION INDICATOR (NavBar)
// ============================================
const SectionObserver = (() => {
  function init() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.4,
      rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(s => observer.observe(s));
  }
  return { init };
})();

// ============================================
// 15. ABOUT SECTION STATS OBSERVER
// ============================================
const AboutObserver = (() => {
  function init() {
    const section = document.getElementById('about');
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        CounterAnimation.start();
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(section);
  }
  return { init };
})();

// ============================================
// 16. MARQUEE — Pause on hover already in CSS
//     But ensure marquee restarts gracefully
// ============================================
const MarqueeController = (() => {
  function init() {
    // Dynamically adjust speed based on window width
    const tracks = document.querySelectorAll('.marquee-inner');
    const updateSpeed = () => {
      const isMobile = window.innerWidth < 768;
      tracks.forEach((track, i) => {
        const duration = isMobile
          ? (i === 0 ? '22s' : '28s')
          : (i === 0 ? '35s' : '40s');
        track.style.animationDuration = duration;
      });
    };

    updateSpeed();
    window.addEventListener('resize', updateSpeed, { passive: true });
  }
  return { init };
})();

// ============================================
// 17. CURSOR GLOW (desktop only)
// ============================================
const CursorGlow = (() => {
  function init() {
    if (window.innerWidth < 1024) return;

    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(239,68,68,0.3);
      pointer-events: none;
      z-index: 9998;
      transition: transform 0.15s ease, opacity 0.3s ease;
      mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);

    const trail = document.createElement('div');
    trail.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(239,68,68,0.6);
      pointer-events: none;
      z-index: 9997;
      transition: left 0.08s ease, top 0.08s ease;
    `;
    document.body.appendChild(trail);

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX - 10}px`;
      cursor.style.top  = `${mouseY - 10}px`;
    });

    // Animate trail
    (function animTrail() {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.left = `${trailX - 4}px`;
      trail.style.top  = `${trailY - 4}px`;
      requestAnimationFrame(animTrail);
    })();

    // Scale on interactive elements
    const interactiveEls = document.querySelectorAll('a, button, .project-card, .service-card');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursor.style.background = 'rgba(239,68,68,0.2)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'rgba(239,68,68,0.3)';
      });
    });
  }
  return { init };
})();

// ============================================
// 18. SMOOTH REVEAL for hero on initial load
// ============================================
const HeroReveal = (() => {
  function init() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;

    setTimeout(() => {
      heroContent.style.opacity    = '1';
      heroContent.style.transform  = 'translateY(0)';
    }, 1700);
  }
  return { init };
})();

// ============================================
// 19. SCROLL PROGRESS BAR
// ============================================
const ScrollProgress = (() => {
  function init() {
    const bar = document.createElement('div');
    bar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #ef4444, #f97316);
      z-index: 9999;
      width: 0%;
      transition: width 0.1s linear;
      pointer-events: none;
    `;
    document.body.prepend(bar);

    window.addEventListener('scroll', () => {
      const scrollTop   = window.scrollY;
      const docHeight   = document.body.scrollHeight - window.innerHeight;
      const scrollPct   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width   = `${scrollPct}%`;
    }, { passive: true });
  }
  return { init };
})();

// ============================================
// INITIALIZE ALL MODULES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  Loader.init();
  Navbar.init();
  TypingEffect.init();
  Particles.init();
  ScrollAnimations.init();
  AnimateSkills.init();
  AboutObserver.init();
  ProjectFilter.init();
  ContactForm.init();
  BackToTop.init();
  ParallaxHero.init();
  GlowCards.init();
  SectionObserver.init();
  MarqueeController.init();
  CursorGlow.init();
  HeroReveal.init();
  ScrollProgress.init();

  // Initial hero content state (hidden before reveal)
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity   = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  }

  console.log('%c⚡ Portfolio Exhorte Mboumba chargé avec succès !', 
    'color: #ef4444; font-size: 14px; font-weight: bold;');
});
