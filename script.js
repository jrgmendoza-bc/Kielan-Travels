const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');
const mediaQueryMobile = window.matchMedia('(max-width: 700px)');

function syncNavToggleIcon(isExpanded) {
  if (!navToggle) {
    return;
  }

  navToggle.textContent = isExpanded ? '✕' : '☰';
  navToggle.setAttribute('aria-label', isExpanded ? 'Close menu' : 'Open menu');
}

function closeNavMenu() {
  navLinks?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  syncNavToggleIcon(false);
}

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  const nextExpanded = !expanded;

  navToggle.setAttribute('aria-expanded', String(nextExpanded));
  navLinks?.classList.toggle('open');
  syncNavToggleIcon(nextExpanded);
});

syncNavToggleIcon(false);

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

function initBookingFormValidation() {
  const bookingForm = document.querySelector('#booking-form');
  if (!bookingForm) {
    return;
  }

  const nameField = bookingForm.querySelector('#booking-name');
  const emailField = bookingForm.querySelector('#booking-email');
  const phoneField = bookingForm.querySelector('#booking-phone');
  const packageField = bookingForm.querySelector('#booking-package');
  const dateField = bookingForm.querySelector('#booking-date');
  const paxField = bookingForm.querySelector('#booking-pax');

  const setFriendlyValidation = (field, messageResolver) => {
    if (!field) {
      return;
    }

    const applyMessage = () => {
      field.setCustomValidity('');

      if (field.validity.valid) {
        return;
      }

      field.setCustomValidity(messageResolver(field.validity));
    };

    field.addEventListener('invalid', applyMessage);
    field.addEventListener('input', applyMessage);
    field.addEventListener('change', applyMessage);
  };

  if (nameField) {
    nameField.addEventListener('input', () => {
      nameField.value = nameField.value.replace(/\d+/g, '');
    });
  }

  setFriendlyValidation(nameField, (validity) => {
    if (validity.valueMissing) {
      return 'Please enter your full name.';
    }
    if (validity.patternMismatch) {
      return "Name can only use letters, spaces, apostrophe ('), period (.), and hyphen (-).";
    }
    return 'Please check your full name.';
  });

  setFriendlyValidation(emailField, (validity) => {
    if (validity.valueMissing) {
      return 'Please enter your email address.';
    }
    if (validity.typeMismatch) {
      return 'Please use a valid email address, like name@example.com.';
    }
    return 'Please check your email address.';
  });

  setFriendlyValidation(packageField, (validity) => {
    if (validity.valueMissing) {
      return 'Please select your preferred package.';
    }
    return 'Please select a package from the list.';
  });

  if (phoneField) {
    const formatMobileNumber = (value) => {
      const digits = value.replace(/\D+/g, '').slice(0, 11);

      if (digits.length <= 4) {
        return digits;
      }
      if (digits.length <= 7) {
        return `${digits.slice(0, 4)}-${digits.slice(4)}`;
      }
      return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
    };

    phoneField.addEventListener('input', () => {
      phoneField.value = formatMobileNumber(phoneField.value);
    });
  }

  setFriendlyValidation(phoneField, (validity) => {
    if (validity.valueMissing) {
      return 'Please enter your mobile number.';
    }
    if (validity.patternMismatch) {
      return 'Please use this format: 09xx-xxx-xxxx.';
    }
    return 'Please check your mobile number.';
  });

  if (dateField) {
    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
      today.getDate()
    ).padStart(2, '0')}`;

    dateField.min = minDate;
  }

  setFriendlyValidation(dateField, (validity) => {
    if (validity.valueMissing) {
      return 'Please choose your preferred travel date.';
    }
    if (validity.rangeUnderflow) {
      return 'Past dates are not allowed. Please choose today or a future date.';
    }
    return 'Please choose a valid travel date.';
  });

  if (paxField) {
    paxField.addEventListener('input', () => {
      let nextValue = paxField.value.replace(/[^\d-]+/g, '');
      nextValue = nextValue.replace(/-{2,}/g, '-');

      const firstDashIndex = nextValue.indexOf('-');
      if (firstDashIndex >= 0) {
        nextValue =
          nextValue.slice(0, firstDashIndex + 1) +
          nextValue
            .slice(firstDashIndex + 1)
            .replace(/-/g, '');
      }

      if (nextValue.startsWith('-')) {
        nextValue = nextValue.slice(1);
      }

      paxField.value = nextValue;
    });
  }

  setFriendlyValidation(paxField, (validity) => {
    if (validity.valueMissing) {
      return 'Please enter the number of travelers.';
    }
    if (validity.patternMismatch) {
      return 'Use numbers only, or a range like 3-5.';
    }
    return 'Please check the travelers field.';
  });
}

function initEmailForms() {
  const emailForms = document.querySelectorAll('.email-form');
  if (!emailForms.length) {
    return;
  }

  const showDownPaymentSection = () => {
    const paymentSection = document.querySelector('#down-payment-section');
    if (!paymentSection) {
      return;
    }

    paymentSection.hidden = false;
    observeRevealElements();
    paymentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  emailForms.forEach((form) => {
    const feedback = form.querySelector('[data-form-feedback]');
    const emailFields = Array.from(form.querySelectorAll('input[type="email"]'));

    const normalizeEmail = (value) => value.trim().replace(/\s+/g, '').toLowerCase();

    emailFields.forEach((field) => {
      field.addEventListener('input', () => {
        field.value = normalizeEmail(field.value);
        if (field.validity.valid) {
          field.setCustomValidity('');
        }
      });

      field.addEventListener('blur', () => {
        field.value = normalizeEmail(field.value);
      });

      field.addEventListener('invalid', () => {
        if (field.validity.valueMissing) {
          field.setCustomValidity('Please enter your email address.');
          return;
        }

        if (field.validity.typeMismatch) {
          field.setCustomValidity('Please check your email address.');
          return;
        }

        field.setCustomValidity('');
      });
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      emailFields.forEach((field) => {
        field.value = normalizeEmail(field.value);
        if (field.validity.valid) {
          field.setCustomValidity('');
        }
      });

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const action = form.getAttribute('action') || '';
      const isConfiguredFormspreeAction =
        /^https:\/\/formspree\.io\/f\/[^\s\/]+$/i.test(action) &&
        !action.includes('BOOKING_FORM_ID') &&
        !action.includes('CONTACT_FORM_ID');

      if (!isConfiguredFormspreeAction) {
        if (feedback) {
          feedback.textContent = 'Form is not fully configured yet. Please replace BOOKING_FORM_ID and CONTACT_FORM_ID with your real Formspree IDs.';
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
          let formspreeMessage = '';

          try {
            const errorPayload = await response.json();
            if (Array.isArray(errorPayload?.errors) && errorPayload.errors.length) {
              formspreeMessage = errorPayload.errors.map((item) => item.message).join(' ');
            }
          } catch (parseError) {
            // Keep fallback message when response body is not JSON.
          }

          console.error('Formspree error:', response.status, response.statusText, formspreeMessage);
          throw new Error(formspreeMessage || `Request failed with status ${response.status}`);
        }

        if (feedback) {
          feedback.textContent = 'Inquiry sent. Next step: choose your payment method below and send your down payment receipt for manual confirmation.';
        }
        form.reset();

        if (form.id === 'booking-form') {
          showDownPaymentSection();
        }
      } catch (error) {
        console.error('Form submission error:', error);
        if (feedback) {
          const safeMessage = error instanceof Error && error.message ? error.message : '';
          feedback.textContent = safeMessage || 'Unable to send inquiry right now. Please check your email and try again, or message Kielan Travels on Facebook.';
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

function initBookingPaymentAnchor() {
  if (window.location.hash !== '#down-payment-section') {
    return;
  }

  const paymentSection = document.querySelector('#down-payment-section');
  if (!paymentSection) {
    return;
  }

  paymentSection.hidden = false;
  observeRevealElements();
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
initBookingFormValidation();
initEmailForms();
initBookingPaymentAnchor();
initAutoHideHeader();
initAmbientMotion();
