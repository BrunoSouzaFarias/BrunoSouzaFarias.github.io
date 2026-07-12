import { prefersReducedMotion, onIntersect } from './motion';

export function initScrollReveal() {
  const items = document.querySelectorAll<HTMLElement>('.reveal');

  if (prefersReducedMotion()) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      (child as HTMLElement).style.setProperty('--reveal-delay', `${i * 80}ms`);
    });
  });

  onIntersect(
    items,
    (el, observer) => {
      el.classList.add('is-visible');
      observer.unobserve(el);
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
}
