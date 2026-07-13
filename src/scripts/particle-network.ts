interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function initParticleNetwork(canvasId: string) {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let points: Point[] = [];
  const mouse = { x: -9999, y: -9999 };
  const LINK_DIST = 130;
  const MOUSE_DIST = 160;

  function getAccentColor(): string {
    const theme = document.documentElement.getAttribute('data-theme');
    // Sawad: lime green no tema escuro, oliva no tema claro para legibilidade.
    return theme === 'light' ? '142, 188, 30' : '197, 255, 65';
  }

  function resize() {
    const rect = canvas!.getBoundingClientRect();
    width = canvas!.width = rect.width * window.devicePixelRatio;
    height = canvas!.height = rect.height * window.devicePixelRatio;
    const count = Math.min(90, Math.floor((rect.width * rect.height) / 14000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4 * window.devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.4 * window.devicePixelRatio,
    }));
  }

  function drawStaticFrame() {
    ctx!.clearRect(0, 0, width, height);
    const rgb = getAccentColor();
    points.forEach((p) => {
      ctx!.fillStyle = `rgba(${rgb}, 0.6)`;
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, 2 * window.devicePixelRatio, 0, Math.PI * 2);
      ctx!.fill();
    });
  }

  function frame() {
    ctx!.clearRect(0, 0, width, height);
    const rgb = getAccentColor();
    const scaledMouseDist = MOUSE_DIST * window.devicePixelRatio;
    const scaledLinkDist = LINK_DIST * window.devicePixelRatio;

    points.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < scaledLinkDist) {
          ctx!.strokeStyle = `rgba(${rgb}, ${(1 - dist / scaledLinkDist) * 0.35})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(points[i].x, points[i].y);
          ctx!.lineTo(points[j].x, points[j].y);
          ctx!.stroke();
        }
      }
      const dmx = points[i].x - mouse.x;
      const dmy = points[i].y - mouse.y;
      const dm = Math.sqrt(dmx * dmx + dmy * dmy);
      const glow = dm < scaledMouseDist ? 1 - dm / scaledMouseDist : 0;
      ctx!.fillStyle = `rgba(${rgb}, ${0.5 + glow * 0.5})`;
      ctx!.beginPath();
      ctx!.arc(points[i].x, points[i].y, (2 + glow * 2.5) * window.devicePixelRatio, 0, Math.PI * 2);
      ctx!.fill();
      if (glow > 0) {
        ctx!.strokeStyle = `rgba(${rgb}, ${glow * 0.5})`;
        ctx!.beginPath();
        ctx!.moveTo(points[i].x, points[i].y);
        ctx!.lineTo(mouse.x, mouse.y);
        ctx!.stroke();
      }
    }

    if (!reduceMotion) requestAnimationFrame(frame);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * window.devicePixelRatio;
    mouse.y = (e.clientY - rect.top) * window.devicePixelRatio;
  });
  canvas.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener('resize', () => {
    resize();
    if (reduceMotion) drawStaticFrame();
  });
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    if (reduceMotion) drawStaticFrame();
  });

  resize();
  if (reduceMotion) {
    drawStaticFrame();
  } else {
    requestAnimationFrame(frame);
  }
}
