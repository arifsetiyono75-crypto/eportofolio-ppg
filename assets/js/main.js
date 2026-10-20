/* ============================================================
   E-PORTOFOLIO PPG — main.js
   ============================================================ */

(function () {
  'use strict';

  /* ---- Dark Mode ---- */
  const THEME_KEY = 'ppg-theme';
  const root = document.documentElement;
  const toggleBtn = document.getElementById('dark-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggleBtn) toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  const savedTheme = localStorage.getItem(THEME_KEY) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ---- Hamburger Menu ---- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      hamburger.textContent = open ? '✕' : '☰';
    });

    // Tutup saat klik link di mobile
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        hamburger.textContent = '☰';
      });
    });

    // Tutup saat klik di luar
    document.addEventListener('click', e => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        hamburger.textContent = '☰';
      }
    });
  }

  /* ---- Active Nav Link ---- */
  (function setActiveNav() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === currentFile || (currentFile === '' && href === 'index.html')) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  })();

  /* ---- Back To Top ---- */
  const backTop = document.getElementById('back-to-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Fade-In on Scroll (IntersectionObserver) ---- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ---- Skill Bars (profil.html) ---- */
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length) {
    const skillObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.width || '0%';
          skillObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    skillBars.forEach(bar => skillObs.observe(bar));
  }

  /* ---- Smooth Anchor Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---- Current Year in Footer ---- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Reading Progress Bar ---- */
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  /* ---- Copy-to-Clipboard for placeholder finder ---- */
  // Tambahkan tooltip pada semua .placeholder-box
  document.querySelectorAll('.placeholder-box').forEach((box, i) => {
    const label = box.querySelector('p, li');
    if (label) {
      box.title = 'Ganti konten di dalam kotak ini dengan isi nyata Anda.';
    }
  });

  console.log('%c E-Portofolio PPG siap! 🎓', 'color:#1A3557;font-weight:bold;font-size:1.1em;');
  console.log('%c Cari semua placeholder dengan: Ctrl+F → "[ISI"', 'color:#F5A623;font-weight:600;');

})();
