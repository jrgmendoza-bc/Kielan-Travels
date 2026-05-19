const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');
const mediaQueryMobile = window.matchMedia('(max-width: 700px)');

function closeNavMenu() {
  navLinks?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeNavMenu();
  });
});

document.addEventListener('click', (event) => {
  if (!mediaQueryMobile.matches || !navLinks?.classList.contains('open')) {
    return;
  }

  if (navLinks.contains(event.target) || navToggle?.contains(event.target)) {
    return;
  }

  closeNavMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeNavMenu();
  }
});

window.addEventListener('resize', () => {
  if (!mediaQueryMobile.matches) {
    closeNavMenu();
  }
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );
}

function observeRevealElements() {
  document.querySelectorAll('.reveal').forEach((el) => {
    if (prefersReducedMotion || !observer) {
      el.classList.add('visible');
      return;
    }

    if (!el.dataset.revealBound) {
      el.dataset.revealBound = 'true';
      observer.observe(el);
    }
  });
}

function initBookingPackagePrefill() {
  const bookingPackageField = document.querySelector('#booking-package');
  if (!bookingPackageField) {
    return;
  }

  const packageFromUrl = new URLSearchParams(window.location.search).get('package');
  if (!packageFromUrl) {
    return;
  }

  const optionExists = Array.from(bookingPackageField.options).some(
    (option) => option.value === packageFromUrl
  );

  if (optionExists) {
    bookingPackageField.value = packageFromUrl;
  }
}

function initLeaveReviewForm() {
  const reviewForm = document.querySelector('#leave-review-form');
  const feedback = document.querySelector('#review-form-feedback');
  if (!reviewForm || !feedback) {
    return;
  }

  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!reviewForm.checkValidity()) {
      reviewForm.reportValidity();
      return;
    }

    // Backend integration note:
    // Submit this payload to PHP endpoint, save in MySQL reviews table with status='pending',
    // and only display entries where status='approved'.
    feedback.textContent = 'Thank you. Your review has been submitted for approval.';
    reviewForm.reset();
  });
}

function initEmailForms() {
  const emailForms = document.querySelectorAll('.email-form');
  if (!emailForms.length) {
    return;
  }

  emailForms.forEach((form) => {
    const feedback = form.querySelector('[data-form-feedback]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const action = form.getAttribute('action') || '';
      if (action.includes('YOUR_EMAIL_HERE')) {
        if (feedback) {
          feedback.textContent = 'Form email receiver is not configured yet. Please set a valid email in the form action.';
        }
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton ? submitButton.textContent : '';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }
      if (feedback) {
        feedback.textContent = '';
      }

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        if (feedback) {
          feedback.textContent = 'Your inquiry was sent successfully. Kielan Travels will get back to you soon.';
        }
        form.reset();
      } catch (error) {
        if (feedback) {
          feedback.textContent = 'Unable to send inquiry right now. Please try again or message Kielan Travels on Facebook.';
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel;
        }
      }
    });
  });
}

function initAutoHideHeader() {
  const header = document.querySelector('.site-header');
  if (!header || prefersReducedMotion) {
    return;
  }

  let ticking = false;

  const updateHeaderState = () => {
    const currentScrollY = window.scrollY;

    header.classList.toggle('header-scrolled', currentScrollY > 10);

    if (mediaQueryMobile.matches && navLinks?.classList.contains('open') && currentScrollY > 10) {
      closeNavMenu();
    }

    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    },
    { passive: true }
  );
}

function initAmbientMotion() {
  if (prefersReducedMotion) {
    return;
  }

  const motionSurfaces = Array.from(
    document.querySelectorAll(
      [
        '.hero-visual',
        '.page-banner',
        '.filters-card',
        '.package-browser-card',
        '.details-banner',
        '.details-card',
        '.content-card',
        '.destination-card',
        '.package-showcase-card',
        '.benefit',
        '.testimonial',
        '.booking-cta',
        '.final-cta-wrap',
        '.road-lane',
        '.moments-carousel'
      ].join(',')
    )
  );

  if (!motionSurfaces.length) {
    return;
  }

  let rafId = 0;

  const update = () => {
    const viewportHeight = window.innerHeight || 1;
    const viewportWidth = window.innerWidth || 1;

    motionSurfaces.forEach((surface, index) => {
      const rect = surface.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const vertical = Math.max(-1, Math.min(1, (viewportHeight * 0.5 - centerY) / viewportHeight));
      const horizontal = Math.max(-1, Math.min(1, (viewportWidth * 0.5 - centerX) / viewportWidth));
      const direction = index % 2 === 0 ? 1 : -1;

      surface.style.setProperty('--ambient-x', `${(horizontal * 22 * direction).toFixed(2)}px`);
      surface.style.setProperty('--ambient-y', `${(vertical * 16).toFixed(2)}px`);
      surface.style.setProperty('--ambient-o', `${(0.12 + Math.abs(vertical) * 0.16).toFixed(2)}`);
    });

    rafId = 0;
  };

  const scheduleUpdate = () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  scheduleUpdate();
}

window.observeRevealElements = observeRevealElements;
observeRevealElements();
initBookingPackagePrefill();
initLeaveReviewForm();
initEmailForms();
initAutoHideHeader();
initAmbientMotion();
