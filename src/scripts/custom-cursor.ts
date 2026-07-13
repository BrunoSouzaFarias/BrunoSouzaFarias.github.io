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
  let currentRingX = 0;
  let currentRingY = 0;
  let initialized = false;

  window.addEventListener('mousemove', (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    ringX = e.clientX;
    ringY = e.clientY;

    if (!initialized) {
      currentRingX = ringX;
      currentRingY = ringY;
      initialized = true;
      dot.style.opacity = '1';
      ring.style.opacity = '0.6';
    }
  });

  function follow() {
    if (initialized) {
      currentRingX += (ringX - currentRingX) * 0.15;
      currentRingY += (ringY - currentRingY) * 0.15;
      ring.style.transform = `translate(${currentRingX}px, ${currentRingY}px) translate(-50%, -50%)`;
    }
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

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    if (initialized) {
      dot.style.opacity = '1';
      ring.style.opacity = '0.6';
    }
  });
}

