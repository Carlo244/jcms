    const header = document.getElementById('site-header');
    const year = document.getElementById('year');
    const revealItems = document.querySelectorAll('[data-reveal]');
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

    year.textContent = new Date().getFullYear();

    const setHeaderState = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };

    const activateReveal = () => {
      if (!('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

      revealItems.forEach((item) => observer.observe(item));
    };

    const activateSections = () => {
      if (!('IntersectionObserver' in window) || sections.length === 0) {
        return;
      }

      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = `#${entry.target.id}`;
          navLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === target;
            link.setAttribute('aria-current', isCurrent ? 'true' : 'false');
          });
        });
      }, { threshold: 0.5, rootMargin: '-20% 0px -55% 0px' });

      sections.forEach((section) => sectionObserver.observe(section));
    };

    addEventListener('scroll', setHeaderState, { passive: true });
    addEventListener('resize', setHeaderState, { passive: true });
    setHeaderState();
    activateReveal();
    activateSections();
