// Enhance offscreen content only; the page remains readable without this script.
(function () {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionPreference.matches || !('IntersectionObserver' in window)) return;

  const pending = new Set();
  const revealAhead = 80;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target, true);
    });
  }, { threshold: 0, rootMargin: `0px 0px ${revealAhead}px 0px` });

  function reveal(element, animate) {
    if (!pending.delete(element)) return;
    observer.unobserve(element);
    element.classList.remove('is-pending');
    if (animate) element.classList.add('is-entering');
  }

  function revealContaining(target) {
    pending.forEach((element) => {
      if (!element.contains(target)) return;
      reveal(element, false);
    });
  }

  function revealAnchor() {
    try {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) revealContaining(target);
    } catch (_) {
      // An invalid fragment must not prevent the rest of the page from working.
    }
  }

  // Read all positions before changing classes, avoiding repeated layout work.
  // Content near the viewport stays visible from the start.
  const viewportEdge = window.innerHeight + revealAhead;
  const offscreen = Array.from(document.querySelectorAll('.reveal')).filter((element) => {
    return element.getBoundingClientRect().top > viewportEdge &&
      !element.contains(document.activeElement);
  });
  offscreen.forEach((element) => {
    pending.add(element);
    element.classList.add('is-pending');
    observer.observe(element);
  });

  document.addEventListener('animationend', (event) => {
    if (event.animationName === 'reveal-in') {
      event.target.classList.remove('is-entering');
    }
  });
  document.addEventListener('focusin', (event) => revealContaining(event.target));
  window.addEventListener('hashchange', revealAnchor);
  revealAnchor();

  motionPreference.addEventListener('change', (event) => {
    if (!event.matches) return;
    pending.forEach((element) => reveal(element, false));
    observer.disconnect();
    document.querySelectorAll('.reveal.is-entering').forEach((element) => {
      element.classList.remove('is-entering');
    });
  });
})();
