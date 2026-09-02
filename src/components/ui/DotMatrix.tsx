import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  angularSpeed: number;
  swayPhase: number;
  swaySpeed: number;
  color: string;
  glowColor: string;
  alpha: number;
  type: 'leaf' | 'firefly' | 'sprout' | 'seed';
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

    // Soft nature colors
    const colors = [
      { fill: '#74C69D', glow: 'rgba(116, 198, 157, 0.45)' }, // fresh mint
      { fill: '#52B788', glow: 'rgba(82, 183, 136, 0.45)' },  // emerald leaf
      { fill: '#95D5B2', glow: 'rgba(149, 213, 178, 0.5)' },  // light spring green
      { fill: '#B7E4C7', glow: 'rgba(183, 228, 199, 0.5)' },  // soft glowing moss
      { fill: '#D8F3DC', glow: 'rgba(216, 243, 220, 0.55)' }, // dewy pale sprout
      { fill: '#FFE6A7', glow: 'rgba(255, 230, 167, 0.45)' }, // golden firefly spore
    ];

    // Grid config
    const spacing = 38;
    const baseGridRadius = 0.55;

    // Dynamic moving particles: leaves, fireflies, sprouts, and seeds
    const count = Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Particle[] = [];

    const types: ('leaf' | 'firefly' | 'sprout' | 'seed')[] = [
      'firefly',
      'leaf',
      'firefly',
      'sprout',
      'leaf',
      'seed',
    ];

    for (let i = 0; i < count; i++) {
      const col = colors[i % colors.length];
      const type = types[i % types.length];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Leaves drift downward-right, fireflies float upwards/freely
        vx: type === 'leaf' ? 0.3 + Math.random() * 0.5 : (Math.random() - 0.5) * 0.7,
        vy: type === 'leaf' ? 0.4 + Math.random() * 0.6 : (Math.random() - 0.5) * 0.6 - 0.15,
        size:
          type === 'leaf'
            ? 11 + Math.random() * 9
            : type === 'sprout'
            ? 14 + Math.random() * 6
            : 2.5 + Math.random() * 2.5,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.025,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.02 + Math.random() * 0.03,
        color: col.fill,
        glowColor: col.glow,
        alpha: 0.4 + Math.random() * 0.4,
        type,
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

    let time = 0;

    // Draw single leaf
    const drawLeaf = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      alpha: number
    ) => {
      c.save();
      c.translate(x, y);
      c.rotate(rot);
      c.globalAlpha = alpha;

      c.beginPath();
      c.moveTo(0, 0);
      c.bezierCurveTo(size * 0.45, -size * 0.4, size * 0.85, -size * 0.28, size, 0);
      c.bezierCurveTo(size * 0.85, size * 0.28, size * 0.45, size * 0.4, 0, 0);
      c.fillStyle = color;
      c.fill();

      // Stem & vein
      c.beginPath();
      c.moveTo(-size * 0.15, 0);
      c.lineTo(size * 0.88, 0);
      c.strokeStyle = 'rgba(235, 245, 238, 0.4)';
      c.lineWidth = 0.8;
      c.stroke();

      c.restore();
    };

    // Draw sprouting plant
    const drawSprout = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      sway: number,
      color: string,
      alpha: number
    ) => {
      c.save();
      c.translate(x, y);
      c.globalAlpha = alpha;

      // Stem
      c.beginPath();
      c.moveTo(0, 0);
      c.quadraticCurveTo(sway * 3, -size * 0.5, sway * 5, -size * 0.85);
      c.strokeStyle = 'rgba(116, 198, 157, 0.65)';
      c.lineWidth = 1.1;
      c.stroke();

      // Left leaf
      c.save();
      c.translate(sway * 5, -size * 0.85);
      c.rotate(-0.55 + sway * 0.25);
      drawLeaf(c, 0, 0, size * 0.7, -0.2, color, 1);
      c.restore();

      // Right leaf
      c.save();
      c.translate(sway * 5, -size * 0.85);
      c.rotate(0.55 + sway * 0.25);
      drawLeaf(c, 0, 0, size * 0.65, 0.2, color, 1);
      c.restore();

      c.restore();
    };

    // Draw glowing bioluminescent firefly
    const drawFirefly = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      glowColor: string,
      alpha: number
    ) => {
      c.save();
      c.globalAlpha = alpha;

      // Outer soft glow halo
      const grad = c.createRadialGradient(x, y, 0, x, y, size * 3.5);
      grad.addColorStop(0, glowColor);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = grad;
      c.beginPath();
      c.arc(x, y, size * 3.5, 0, Math.PI * 2);
      c.fill();

      // Bright inner glowing core
      c.fillStyle = color;
      c.beginPath();
      c.arc(x, y, size, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    const render = () => {
      if (!canvas || !ctx) return;
      time += 0.016;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const hasMouse = mouse.x > 0 && mouse.y > 0;

      // 1. Soft dewy background grid
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          let radius = baseGridRadius;
          let alpha = 0.055;

          if (hasMouse) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              const factor = 1 - dist / 100;
              radius = baseGridRadius + factor * 0.45;
              alpha = 0.055 + factor * 0.14;
            }
          }

          ctx.fillStyle = `rgba(116, 198, 157, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Dynamic Moving Nature Elements
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Smooth swaying motion
        const sway = Math.sin(time * 2 + p.swayPhase);

        if (p.type === 'leaf') {
          p.x += p.vx + sway * 0.35;
          p.y += p.vy + Math.cos(time + p.swayPhase) * 0.2;
          p.angle += p.angularSpeed + sway * 0.01;
        } else if (p.type === 'sprout') {
          p.x += p.vx * 0.4 + sway * 0.2;
          p.y += p.vy * 0.4;
          p.angle += p.angularSpeed;
        } else {
          // Fireflies and floating seeds float organically in currents
          p.x += p.vx + Math.sin(time * 1.5 + p.swayPhase) * 0.4;
          p.y += p.vy + Math.cos(time * 1.8 + p.swayPhase) * 0.4;
        }

        // Screen wrap (seamless continuous motion)
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y > height + 30) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }

        // Mouse interaction (leaves and fireflies gently disperse with wind)
        if (hasMouse) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (1 - dist / 140) * 1.5;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
            p.angle += force * 0.05;
          }
        }

        // Soft pulsing glow
        const currentAlpha = Math.min(
          0.85,
          p.alpha + Math.sin(time * 2.5 + p.swayPhase) * 0.18
        );

        // Render each dynamic element
        if (p.type === 'leaf') {
          drawLeaf(ctx, p.x, p.y, p.size, p.angle, p.color, currentAlpha);
        } else if (p.type === 'sprout') {
          drawSprout(ctx, p.x, p.y, p.size, sway, p.color, currentAlpha);
        } else {
          drawFirefly(ctx, p.x, p.y, p.size, p.color, p.glowColor, currentAlpha);
        }
      }

      // 3. Faint filaments connecting nearby glowing fireflies
      const maxConnect = 90;
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].type !== 'firefly' && particles[i].type !== 'seed') continue;
        for (let j = i + 1; j < particles.length; j++) {
          if (particles[j].type !== 'firefly' && particles[j].type !== 'seed') continue;

          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnect) {
            const lineAlpha = (1 - dist / maxConnect) * 0.12;
            ctx.strokeStyle = `rgba(116, 198, 157, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
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
