import { prefersReducedMotion, onIntersect } from './motion';

export function initCountUp() {
  const els = document.querySelectorAll<HTMLElement>('[data-count-to]');
  const reduce = prefersReducedMotion();

  els.forEach((el) => {
    const target = Number(el.dataset.countTo);

    if (reduce) {
      el.textContent = String(target);
      return;
    }

    onIntersect(
      [el],
      (node, observer) => {
        observer.unobserve(node);
        const duration = 1400;
        const start = performance.now();

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = String(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
  });
}
