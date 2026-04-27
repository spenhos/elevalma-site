// =============================================
// ElevAlma — Main Application Script
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- PAGE LOADER ----
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('done'), 400);
    });
    setTimeout(() => loader.classList.add('done'), 2500);
  }

  // ---- NAV SCROLL EFFECT ----
  const nav = document.querySelector('.nav');
  const handleScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- ACTIVE NAV LINK ----
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a');
  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinksAll.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observerNav.observe(sec));

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observerReveal.observe(el));

  // ---- CURSOR GLOW ----
  const glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  } else if (glow) {
    glow.style.display = 'none';
  }

  // ---- MOBILE MENU ----
  const menuBtn = document.querySelector('.nav-mobile');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.querySelector('.mobile-close');

  if (menuBtn && overlay) {
    menuBtn.addEventListener('click', () => overlay.classList.add('open'));
    closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => overlay.classList.remove('open'));
    });
  }

  // ---- RENDER VIDEOS FROM DATA ----
  const grid = document.getElementById('videos-grid');
  if (grid && typeof SITE_DATA !== 'undefined') {
    renderVideos(SITE_DATA.videos, 'all');
  }

  // ---- FILTER TABS ----
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      renderVideos(SITE_DATA.videos, cat);
    });
  });

  // ---- RENDER FEATURED ----
  if (typeof SITE_DATA !== 'undefined' && SITE_DATA.featured) {
    const f = SITE_DATA.featured;
    const featTitle = document.getElementById('featured-title');
    const featSub = document.getElementById('featured-subtitle');
    const featMeta = document.getElementById('featured-meta');
    const featLink = document.getElementById('featured-link');
    const featImg = document.getElementById('featured-thumb-img');

    if (featTitle) featTitle.textContent = f.title;
    if (featSub) featSub.textContent = f.subtitle;
    if (featMeta) featMeta.textContent = f.duration + (f.views ? ' · ' + f.views + ' vistas' : '');
    if (featLink) featLink.href = 'https://www.youtube.com/watch?v=' + f.youtubeId;
    if (featImg) {
      featImg.src = 'https://img.youtube.com/vi/' + f.youtubeId + '/maxresdefault.jpg';
      featImg.alt = f.title;
    }
  }

  // ---- NEWSLETTER FORM (FormSubmit.co) ----
  const nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = nlForm.querySelector('.newsletter-btn');
      const btnText = btn.querySelector('.newsletter-btn-text');
      btnText.textContent = 'Suscribiendo...';
      btn.disabled = true;

      try {
        const formData = new FormData(nlForm);
        const response = await fetch('https://formsubmit.co/ajax/consulta@elevalma.com', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          nlForm.style.display = 'none';
          document.getElementById('newsletter-success').style.display = 'block';
          if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_signup', {
              event_category: 'engagement',
              event_label: 'newsletter'
            });
          }
        } else {
          btnText.textContent = 'Error — intenta de nuevo';
          btn.disabled = false;
        }
      } catch (err) {
        btnText.textContent = 'Error — intenta de nuevo';
        btn.disabled = false;
      }
    });
  }

  // ---- GA4 EVENT TRACKING ----
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.video-card');
    if (card && typeof gtag !== 'undefined') {
      gtag('event', 'video_click', {
        event_category: 'videos',
        event_label: card.querySelector('h3')?.textContent || ''
      });
    }
    const cta = e.target.closest('.service-cta');
    if (cta && typeof gtag !== 'undefined') {
      gtag('event', 'service_inquiry', {
        event_category: 'services',
        event_label: cta.closest('.service-card')?.querySelector('h3')?.textContent || ''
      });
    }
  });

  // ---- CONTACT FORM ----
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.style.display = 'none';
          document.querySelector('.form-success').style.display = 'block';
          if (typeof gtag !== 'undefined') {
            gtag('event', 'contact_form_submit', {
              event_category: 'leads',
              event_label: form.querySelector('select[name="tipo_consulta"]')?.value || ''
            });
          }
        } else {
          btn.textContent = 'Error — intenta de nuevo';
          btn.disabled = false;
        }
      } catch (err) {
        btn.textContent = 'Error — intenta de nuevo';
        btn.disabled = false;
      }
    });
  }

  // ---- SMOOTH SCROLL FOR NAV LINKS ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- COUNTER ANIMATION ----
  const counters = document.querySelectorAll('.stat-number');
  const observerCount = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observerCount.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observerCount.observe(c));
});

// ---- HELPER: Render video cards ----
function renderVideos(videos, category) {
  const grid = document.getElementById('videos-grid');
  if (!grid) return;

  const filtered = category === 'all'
    ? videos
    : videos.filter(v => v.category === category);

  grid.innerHTML = filtered.map((v, i) => `
    <a href="https://www.youtube.com/watch?v=${v.youtubeId}" target="_blank" rel="noopener"
       class="video-card reveal stagger-${Math.min(i + 1, 6)}">
      <div class="video-card-thumb">
        <img src="https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg" alt="${v.title}" loading="lazy">
        <div class="play-btn"></div>
      </div>
      <div class="video-card-body">
        <span class="label">${v.series}</span>
        <h3>${v.title}</h3>
        <p>${v.description}</p>
        <div class="meta">
          <span>${v.duration}</span>
          <span>${formatDate(v.date)}</span>
        </div>
      </div>
    </a>
  `).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  });
}

// ---- HELPER: Format date ----
function formatDate(dateStr) {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const d = new Date(dateStr + 'T00:00:00');
  return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

// ---- HELPER: Animate counter ----
function animateCounter(el) {
  const text = el.textContent;
  const match = text.match(/(\d+)/);
  if (!match) return;

  const target = parseInt(match[0]);
  const suffix = text.replace(match[0], '').trim();
  const prefix = text.indexOf(match[0]) > 0 ? text.substring(0, text.indexOf(match[0])) : '';
  let current = 0;
  const step = Math.ceil(target / 40);
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = prefix + current + suffix;
  }, 30);
}
