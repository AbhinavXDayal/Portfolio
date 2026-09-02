import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  phase: number;
}

export const DotMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    };

    // Grid config
    const spacing = 32;
    const baseGridRadius = 0.85;
    const hoverRadius = 135;

    // Floating dynamic particles
    const particleCount = Math.min(Math.floor((width * height) / 32000), 42);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 1.5 + Math.random() * 1.5,
        baseAlpha: 0.15 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const resize = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let time = 0;

    const render = () => {
      if (!canvas || !ctx) return;
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const hasMouse = mouse.x > 0 && mouse.y > 0;

      // 1. Draw Subtle Static/Interactive Dot Matrix Grid
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          let radius = baseGridRadius;
          let alpha = 0.12;

          if (hasMouse && !prefersReducedMotion) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < hoverRadius) {
              const factor = 1 - dist / hoverRadius;
              radius = baseGridRadius + factor * 1.6;
              alpha = 0.12 + factor * 0.42;
            }
          }

          ctx.fillStyle = `rgba(135, 85, 46, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw & Update Moving Dynamic Floating Nodes & Constellation Lines
      if (!prefersReducedMotion) {
        // Update particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Gentle ambient wave motion
          p.x += p.vx + Math.sin(time + p.phase) * 0.15;
          p.y += p.vy + Math.cos(time + p.phase) * 0.15;

          // Wrap edges
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;

          // Mouse interaction (soft attraction / dynamic flare)
          if (hasMouse) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              const force = (1 - dist / 150) * 0.8;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }
        }

        // Draw connections between close moving particles
        const maxConnectDist = 120;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxConnectDist) {
              const lineAlpha = (1 - dist / maxConnectDist) * 0.16;
              ctx.strokeStyle = `rgba(135, 85, 46, ${lineAlpha})`;
              ctx.lineWidth = 0.85;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Connection to mouse cursor
          if (hasMouse) {
            const p = particles[i];
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 140) {
              const lineAlpha = (1 - dist / 140) * 0.28;
              ctx.strokeStyle = `rgba(135, 85, 46, ${lineAlpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }

        // Draw moving particle nodes
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const pulsingAlpha = p.baseAlpha + Math.sin(time * 2 + p.phase) * 0.08;

          // Outer soft glow
          ctx.fillStyle = `rgba(135, 85, 46, ${Math.max(0.04, pulsingAlpha * 0.4)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Core dot
          ctx.fillStyle = `rgba(135, 85, 46, ${pulsingAlpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};
