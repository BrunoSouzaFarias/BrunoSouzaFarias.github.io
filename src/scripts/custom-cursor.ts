import { prefersReducedMotion } from './motion';

export function initCustomCursor() {
  if (prefersReducedMotion()) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor custom-cursor--dot';
  const ring = document.createElement('div');
  ring.className = 'custom-cursor custom-cursor--ring';
  document.body.append(dot, ring);
  document.documentElement.classList.add('has-custom-cursor');

  let ringX = 0;
  let ringY = 0;

  window.addEventListener('mousemove', (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    ringX = e.clientX;
    ringY = e.clientY;
  });

  function follow() {
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(follow);
  }
  requestAnimationFrame(follow);

  const hoverables = 'a, button, .work__card, .stack__category, [role="button"]';
  document.addEventListener('mouseover', (e) => {
    if ((e.target as HTMLElement).closest?.(hoverables)) ring.classList.add('is-active');
  });
  document.addEventListener('mouseout', (e) => {
    if ((e.target as HTMLElement).closest?.(hoverables)) ring.classList.remove('is-active');
  });
}
