import { prefersReducedMotion } from './motion';

const SURFACE_TRANSITION_MS = 300;

function openSurface(el: Element | null) {
  if (!el) return;
  el.removeAttribute('hidden');
  requestAnimationFrame(() => el.classList.add('is-open'));
}

function closeSurface(el: Element | null) {
  if (!el) return;
  el.classList.remove('is-open');
  const applyHidden = () => el.setAttribute('hidden', '');

  if (prefersReducedMotion()) {
    applyHidden();
    return;
  }

  let finished = false;
  const onEnd = (e: Event) => {
    if (e.target !== el) return;
    finished = true;
    el.removeEventListener('transitionend', onEnd);
    applyHidden();
  };
  el.addEventListener('transitionend', onEnd);
  setTimeout(() => {
    if (!finished) {
      el.removeEventListener('transitionend', onEnd);
      applyHidden();
    }
  }, SURFACE_TRANSITION_MS + 50);
}

function trapFocus(container: HTMLElement) {
  const focusable = container.querySelectorAll<HTMLElement>(
    'a[href], button, textarea, input, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length === 0) return;
  focusable[0].focus();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  container.addEventListener('keydown', handleKeydown);
}

export function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle?.addEventListener('click', () => menu?.classList.toggle('show'));
  menu?.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => menu.classList.remove('show'))
  );
}

export function initAboutDrawer() {
  const trigger = document.getElementById('about-trigger');
  const drawer = document.getElementById('about-drawer');
  const backdrop = document.getElementById('about-backdrop');
  const closeButtons = drawer?.querySelectorAll('[data-close]');
  let lastFocused: HTMLElement | null = null;

  function open() {
    lastFocused = document.activeElement as HTMLElement;
    openSurface(drawer);
    openSurface(backdrop);
    document.body.style.overflow = 'hidden';
    if (drawer) trapFocus(drawer);
  }
  function close() {
    closeSurface(drawer);
    closeSurface(backdrop);
    document.body.style.overflow = '';
    lastFocused?.focus();
  }

  trigger?.addEventListener('click', open);
  backdrop?.addEventListener('click', close);
  closeButtons?.forEach((btn) => btn.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer?.hasAttribute('hidden')) close();
  });
}

export function initCaseStudyModal() {
  const overlay = document.getElementById('case-study-overlay');
  const backdrop = document.getElementById('case-study-backdrop');
  const closeButtons = overlay?.querySelectorAll('[data-close]');
  const cards = document.querySelectorAll<HTMLElement>('[data-project]');
  let lastFocused: HTMLElement | null = null;

  function open(slug: string) {
    document.querySelectorAll('.case-study').forEach((panel) => panel.setAttribute('hidden', ''));
    const panel = document.getElementById(`case-study-${slug}`);
    panel?.removeAttribute('hidden');
    lastFocused = document.activeElement as HTMLElement;
    openSurface(overlay);
    openSurface(backdrop);
    document.body.style.overflow = 'hidden';
    if (overlay) trapFocus(overlay);
  }
  function close() {
    closeSurface(overlay);
    closeSurface(backdrop);
    document.body.style.overflow = '';
    lastFocused?.focus();
  }

  cards.forEach((card) => {
    const slug = card.dataset.project;
    if (!slug) return;
    card.addEventListener('click', () => open(slug));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(slug);
      }
    });
  });

  backdrop?.addEventListener('click', close);
  closeButtons?.forEach((btn) => btn.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay?.hasAttribute('hidden')) close();
  });
}

export function initContactForm() {
  const form = document.getElementById('contactForm') as HTMLFormElement | null;
  const feedback = document.getElementById('contactFeedback');
  const submitBtn = form?.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('contactName') as HTMLInputElement)?.value.trim();
    const email = (document.getElementById('contactEmail') as HTMLInputElement)?.value.trim();
    const message = (document.getElementById('contactMessage') as HTMLTextAreaElement)?.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!feedback) return;

    if (!name || !email || !message) {
      feedback.textContent = 'Preencha todos os campos antes de enviar.';
      feedback.className = 'contact__feedback contact__feedback--error';
      return;
    }
    if (!emailRegex.test(email)) {
      feedback.textContent = 'Insira um email válido.';
      feedback.className = 'contact__feedback contact__feedback--error';
      return;
    }

    const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        'EmailJS keys are missing. Form submission is running in simulated demo mode. ' +
        'To connect a live form, set PUBLIC_EMAILJS_SERVICE_ID, PUBLIC_EMAILJS_TEMPLATE_ID, ' +
        'and PUBLIC_EMAILJS_PUBLIC_KEY in your environment variables.'
      );
      feedback.textContent = 'Mensagem registrada! Em breve entro em contato.';
      feedback.className = 'contact__feedback contact__feedback--success';
      form.reset();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          reply_to: email,
          message: message,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          feedback.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
          feedback.className = 'contact__feedback contact__feedback--success';
          form.reset();
        } else {
          throw new Error('Falha ao enviar mensagem via EmailJS.');
        }
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        feedback.textContent = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.';
        feedback.className = 'contact__feedback contact__feedback--error';
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar mensagem';
        }
      });
  });
}

function positionNavIndicator(link: HTMLElement | null) {
  const indicator = document.querySelector<HTMLElement>('.nav__indicator');
  const list = document.querySelector<HTMLElement>('.nav__list');
  if (!indicator || !list) return;
  if (!link) {
    indicator.style.opacity = '0';
    return;
  }
  const listRect = list.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  indicator.style.width = `${linkRect.width}px`;
  indicator.style.transform = `translateX(${linkRect.left - listRect.left}px)`;
  indicator.style.opacity = '1';
}

export function initScrollActiveNav() {
  const sections = document.querySelectorAll<HTMLElement>('main section[id]');

  function onScroll() {
    const scrollY = window.scrollY;
    let activeLink: HTMLElement | null = null;
    sections.forEach((section) => {
      const top = section.offsetTop - 80;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector<HTMLElement>(`.nav__link[href="#${id}"]`);
      if (scrollY > top && scrollY <= top + height) {
        link?.classList.add('active');
        activeLink = link;
      } else {
        link?.classList.remove('active');
      }
    });
    positionNavIndicator(activeLink);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}
