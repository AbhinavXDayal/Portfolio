import React, { useEffect, useRef } from 'react';

interface NatureLeaf {
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
  alpha: number;
  type: 'leaf' | 'sprout' | 'petal';
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

    // Nature palette colors for plants and leaves on warm beige
    const plantColors = [
      '#587B56', // herbal sage
      '#466444', // lush forest green
      '#759873', // tender leaf green
      '#6A8D68', // botanical moss
      '#88AB86', // soft meadow green
    ];

    // Grid config: very soft organic dew-drop matrix
    const spacing = 36;
    const baseGridRadius = 0.55;
    const hoverRadius = 110;

    // Dynamic floating plants and drifting leaves
    const plantCount = Math.min(Math.floor((width * height) / 40000), 24);
    const plants: NatureLeaf[] = [];

    const types: ('leaf' | 'sprout' | 'petal')[] = ['leaf', 'leaf', 'sprout', 'petal'];

    for (let i = 0; i < plantCount; i++) {
      plants.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.4) * 0.4,
        vy: 0.22 + Math.random() * 0.35, // gentle drifting downward
        size: 8 + Math.random() * 7,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.012,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.02 + Math.random() * 0.02,
        color: plantColors[i % plantColors.length],
        alpha: 0.25 + Math.random() * 0.3,
        type: types[i % types.length],
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

    // Helper: draw single curved leaf blade with central vein
    const drawLeafShape = (
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

      // Leaf body
      c.beginPath();
      c.moveTo(0, 0);
      c.bezierCurveTo(size * 0.45, -size * 0.42, size * 0.85, -size * 0.3, size, 0);
      c.bezierCurveTo(size * 0.85, size * 0.3, size * 0.45, size * 0.42, 0, 0);
      c.fillStyle = color;
      c.fill();

      // Delicate leaf vein
      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(size * 0.88, 0);
      c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      c.lineWidth = 0.6;
      c.stroke();

      c.restore();
    };

    // Helper: draw little sprouting two-leaf seedling
    const drawSproutShape = (
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

      // Tiny curved stem
      c.beginPath();
      c.moveTo(0, 0);
      c.quadraticCurveTo(sway * 3, -size * 0.5, sway * 5, -size * 0.85);
      c.strokeStyle = 'rgba(88, 123, 86, 0.6)';
      c.lineWidth = 0.9;
      c.stroke();

      // Left cotyledon leaf
      c.save();
      c.translate(sway * 5, -size * 0.85);
      c.rotate(-0.55 + sway * 0.25);
      drawLeafShape(c, 0, 0, size * 0.7, -0.2, color, 1);
      c.restore();

      // Right cotyledon leaf
      c.save();
      c.translate(sway * 5, -size * 0.85);
      c.rotate(0.55 + sway * 0.25);
      drawLeafShape(c, 0, 0, size * 0.65, 0.2, color, 1);
      c.restore();

      c.restore();
    };

    // Helper: draw little drifting petal
    const drawPetalShape = (
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
      c.arc(0, -size * 0.3, size * 0.35, 0, Math.PI * 2);
      c.fillStyle = color;
      c.fill();

      c.beginPath();
      c.arc(-size * 0.25, size * 0.1, size * 0.3, 0, Math.PI * 2);
      c.fill();

      c.beginPath();
      c.arc(size * 0.25, size * 0.1, size * 0.3, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    const render = () => {
      if (!canvas || !ctx) return;
      time += 0.016;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const hasMouse = mouse.x > 0 && mouse.y > 0;

      // 1. Soft, organic dewy dot matrix in warm taupe on beige
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          let radius = baseGridRadius;
          let alpha = 0.06;

          if (hasMouse && !prefersReducedMotion) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < hoverRadius) {
              const factor = 1 - dist / hoverRadius;
              radius = baseGridRadius + factor * 0.4;
              alpha = 0.06 + factor * 0.12;
            }
          }

          ctx.fillStyle = `rgba(140, 125, 105, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Dynamic Moving Plants & Drifting Nature Leaves
      if (!prefersReducedMotion) {
        for (let i = 0; i < plants.length; i++) {
          const p = plants[i];

          // Gentle organic swaying
          const sway = Math.sin(time * 1.4 + p.swayPhase);
          p.x += p.vx + sway * 0.25;
          p.y += p.vy + Math.cos(time + p.swayPhase) * 0.12;
          p.angle += p.angularSpeed + sway * 0.008;

          // Wrap edges smoothly
          if (p.x < -30) p.x = width + 30;
          if (p.x > width + 30) p.x = -30;
          if (p.y > height + 30) {
            p.y = -30;
            p.x = Math.random() * width;
          }
          if (p.y < -30) p.y = height + 30;

          // Gentle wind interaction with mouse cursor
          if (hasMouse) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const force = (1 - dist / 120) * 1.1;
              p.x -= (dx / dist) * force;
              p.y -= (dy / dist) * force;
              p.angle += force * 0.03;
            }
          }

          const currentAlpha = Math.min(0.6, p.alpha + Math.sin(time * 1.2 + p.swayPhase) * 0.05);

          if (p.type === 'leaf') {
            drawLeafShape(ctx, p.x, p.y, p.size, p.angle, p.color, currentAlpha);
          } else if (p.type === 'sprout') {
            drawSproutShape(ctx, p.x, p.y, p.size, sway, p.color, currentAlpha);
          } else {
            drawPetalShape(ctx, p.x, p.y, p.size * 0.6, p.angle, p.color, currentAlpha);
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
