import { prefersReducedMotion } from './motion';

export function initScrollTopButton() {
  const btn = document.getElementById('scroll-top-btn');
  const hero = document.getElementById('home');
  if (!btn || !hero) return;

  function onScroll() {
    const threshold = hero!.offsetHeight * 0.8;
    if (window.scrollY > threshold) {
      btn!.removeAttribute('hidden');
      requestAnimationFrame(() => btn!.classList.add('is-visible'));
    } else {
      btn!.classList.remove('is-visible');
      btn!.setAttribute('hidden', '');
    }
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
