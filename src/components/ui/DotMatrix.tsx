import React, { useEffect, useRef } from 'react';

interface NatureElement {
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
  type: 'leaf' | 'sprout' | 'graphNode';
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

    // Nature botanical matte colors (no glow, soft and organic)
    const leafColors = [
      '#7EA984', // fresh herbal sage
      '#5B8B67', // lush leaf green
      '#A3CEB3', // tender forest mint
      '#6E9A75', // deep botanical moss
    ];

    // Dot matrix grid config (subtle matte dewy pinpoints)
    const spacing = 42;
    const baseDotRadius = 0.5;

    // Reduced overall quantity: only 12 leaves/sprouts + 10 graph nodes
    const totalCount = Math.min(Math.floor((width * height) / 40000), 22);
    const elements: NatureElement[] = [];

    for (let i = 0; i < totalCount; i++) {
      // Balance: ~60% leaves/sprouts, ~40% graph nodes
      const type: 'leaf' | 'sprout' | 'graphNode' =
        i % 3 === 0 ? 'graphNode' : i % 3 === 1 ? 'leaf' : 'sprout';

      elements.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Leaves drift gently downward-right, graph nodes drift organically
        vx: type === 'graphNode' ? (Math.random() - 0.5) * 0.35 : 0.25 + Math.random() * 0.35,
        vy: type === 'graphNode' ? (Math.random() - 0.5) * 0.35 : 0.35 + Math.random() * 0.45,
        size:
          type === 'leaf'
            ? 11 + Math.random() * 8
            : type === 'sprout'
            ? 13 + Math.random() * 6
            : 1.4 + Math.random() * 0.6, // clean matte point
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.018,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.015 + Math.random() * 0.02,
        color: leafColors[i % leafColors.length],
        alpha: type === 'graphNode' ? 0.35 + Math.random() * 0.2 : 0.45 + Math.random() * 0.3,
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

    // Draw crisp matte leaf (NO glow halos)
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

      // Leaf blade
      c.beginPath();
      c.moveTo(0, 0);
      c.bezierCurveTo(size * 0.45, -size * 0.4, size * 0.85, -size * 0.28, size, 0);
      c.bezierCurveTo(size * 0.85, size * 0.28, size * 0.45, size * 0.4, 0, 0);
      c.fillStyle = color;
      c.fill();

      // Delicate stem & central vein
      c.beginPath();
      c.moveTo(-size * 0.15, 0);
      c.lineTo(size * 0.88, 0);
      c.strokeStyle = 'rgba(234, 241, 236, 0.4)';
      c.lineWidth = 0.7;
      c.stroke();

      c.restore();
    };

    // Draw swaying seedling sprout (NO glow)
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
      c.strokeStyle = 'rgba(126, 169, 132, 0.55)';
      c.lineWidth = 1;
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

    const render = () => {
      if (!canvas || !ctx) return;
      time += 0.014;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const hasMouse = mouse.x > 0 && mouse.y > 0;

      // 1. Dynamic Moving Dot Matrix (clean matte dewy pinpoints, gentle wave motion)
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          const wave = Math.sin(time + x * 0.014 + y * 0.014) * 0.35;
          let dotRadius = baseDotRadius;
          let alpha = 0.045 + wave * 0.01;

          if (hasMouse) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              const factor = 1 - dist / 90;
              dotRadius = baseDotRadius + factor * 0.4;
              alpha = 0.05 + factor * 0.1;
            }
          }

          ctx.fillStyle = `rgba(126, 169, 132, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Update Dynamic Moving Nature Elements
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const sway = Math.sin(time * 1.6 + el.swayPhase);

        if (el.type === 'leaf') {
          el.x += el.vx + sway * 0.3;
          el.y += el.vy + Math.cos(time + el.swayPhase) * 0.18;
          el.angle += el.angularSpeed + sway * 0.008;
        } else if (el.type === 'sprout') {
          el.x += el.vx * 0.4 + sway * 0.2;
          el.y += el.vy * 0.35;
          el.angle += el.angularSpeed;
        } else {
          // Graph node drift
          el.x += el.vx + Math.sin(time + i) * 0.15;
          el.y += el.vy + Math.cos(time + i) * 0.15;
        }

        // Screen wrap (seamless continuous loop)
        if (el.x < -30) el.x = width + 30;
        if (el.x > width + 30) el.x = -30;
        if (el.y > height + 30) {
          el.y = -30;
          el.x = Math.random() * width;
        }
        if (el.y < -30) {
          el.y = height + 30;
          el.x = Math.random() * width;
        }

        // Gentle mouse wind deflection
        if (hasMouse) {
          const dx = mouse.x - el.x;
          const dy = mouse.y - el.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const force = (1 - dist / 130) * 1.2;
            el.x -= (dx / dist) * force;
            el.y -= (dy / dist) * force;
            el.angle += force * 0.04;
          }
        }
      }

      // 3. Draw Dynamic Graph Lines / Edges between graph nodes and leaves
      const maxDistance = 140;
      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const dx = elements[i].x - elements[j].x;
          const dy = elements[i].y - elements[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect nearby elements with delicate thin botanical filaments
          if (dist < maxDistance) {
            const edgeAlpha = (1 - dist / maxDistance) * 0.14;
            ctx.strokeStyle = `rgba(126, 169, 132, ${edgeAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(elements[i].x, elements[i].y);
            ctx.lineTo(elements[j].x, elements[j].y);
            ctx.stroke();
          }
        }

        // Interactive cursor connection
        if (hasMouse) {
          const dx = mouse.x - elements[i].x;
          const dy = mouse.y - elements[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const edgeAlpha = (1 - dist / 120) * 0.18;
            ctx.strokeStyle = `rgba(163, 206, 179, ${edgeAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(elements[i].x, elements[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 4. Render Leaves, Sprouts, and Matte Graph Nodes (crisp, solid, NO glow)
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const currentAlpha = Math.min(
          0.75,
          el.alpha + Math.sin(time * 1.8 + el.swayPhase) * 0.08
        );

        if (el.type === 'leaf') {
          drawLeaf(ctx, el.x, el.y, el.size, el.angle, el.color, currentAlpha);
        } else if (el.type === 'sprout') {
          const sway = Math.sin(time * 1.6 + el.swayPhase);
          drawSprout(ctx, el.x, el.y, el.size, sway, el.color, currentAlpha);
        } else {
          // Clean solid matte graph node (strictly NO glow halos)
          ctx.fillStyle = el.color;
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
          ctx.fill();
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
