export function initCursorGlow() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const targets = document.querySelectorAll<HTMLElement>('.work__card, .stack__category');
  targets.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--x', '50%');
      el.style.setProperty('--y', '50%');
    });
  });
}
