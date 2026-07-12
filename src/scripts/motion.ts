export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function onIntersect(
  elements: HTMLElement[] | NodeListOf<HTMLElement>,
  callback: (el: HTMLElement, observer: IntersectionObserver) => void,
  options?: IntersectionObserverInit
) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) callback(entry.target as HTMLElement, obs);
    });
  }, options);
  elements.forEach((el) => observer.observe(el));
  return observer;
}
