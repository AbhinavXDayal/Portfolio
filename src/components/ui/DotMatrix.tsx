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

    // Nature botanical matte colors (crisp, solid, no glow)
    const leafColors = [
      '#7EA984', // fresh herbal sage
      '#5B8B67', // lush leaf green
      '#A3CEB3', // tender forest mint
      '#6E9A75', // deep botanical moss
      '#88B792', // bright sage
    ];

    // Dot matrix grid config (prominent, crisp matte dewy pinpoints)
    const spacing = 36;
    const baseDotRadius = 0.85;

    // Balanced nature elements & graph nodes
    const totalCount = Math.min(Math.floor((width * height) / 32000), 28);
    const elements: NatureElement[] = [];

    for (let i = 0; i < totalCount; i++) {
      // 50% graph nodes, 50% leaves/sprouts
      const type: 'leaf' | 'sprout' | 'graphNode' =
        i % 2 === 0 ? 'graphNode' : i % 4 === 1 ? 'leaf' : 'sprout';

      elements.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: type === 'graphNode' ? (Math.random() - 0.5) * 0.45 : 0.28 + Math.random() * 0.4,
        vy: type === 'graphNode' ? (Math.random() - 0.5) * 0.45 : 0.38 + Math.random() * 0.48,
        size:
          type === 'leaf'
            ? 12 + Math.random() * 8
            : type === 'sprout'
            ? 14 + Math.random() * 6
            : 2.4 + Math.random() * 0.8, // prominent solid matte graph node
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.015 + Math.random() * 0.02,
        color: leafColors[i % leafColors.length],
        alpha: type === 'graphNode' ? 0.7 + Math.random() * 0.2 : 0.65 + Math.random() * 0.25,
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

    // Draw crisp matte leaf
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

      // Leaf body
      c.beginPath();
      c.moveTo(0, 0);
      c.bezierCurveTo(size * 0.45, -size * 0.4, size * 0.85, -size * 0.28, size, 0);
      c.bezierCurveTo(size * 0.85, size * 0.28, size * 0.45, size * 0.4, 0, 0);
      c.fillStyle = color;
      c.fill();

      // Clear crisp central vein
      c.beginPath();
      c.moveTo(-size * 0.15, 0);
      c.lineTo(size * 0.88, 0);
      c.strokeStyle = 'rgba(235, 245, 238, 0.65)';
      c.lineWidth = 0.9;
      c.stroke();

      c.restore();
    };

    // Draw swaying seedling sprout
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
      c.strokeStyle = 'rgba(126, 169, 132, 0.75)';
      c.lineWidth = 1.2;
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
      time += 0.016;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const hasMouse = mouse.x > 0 && mouse.y > 0;

      // 1. High-Performance Batched Dot Matrix Grid (Single path draw for entire background)
      ctx.beginPath();
      ctx.fillStyle = 'rgba(135, 185, 148, 0.12)';
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          ctx.moveTo(x + baseDotRadius, y);
          ctx.arc(x, y, baseDotRadius, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      // Interactive mouse reactive highlight dots (only compute for dots near cursor)
      if (hasMouse) {
        const mouseRadius = 110;
        const startX = Math.max(spacing / 2, Math.floor((mouse.x - mouseRadius) / spacing) * spacing + spacing / 2);
        const endX = Math.min(width, Math.ceil((mouse.x + mouseRadius) / spacing) * spacing + spacing / 2);
        const startY = Math.max(spacing / 2, Math.floor((mouse.y - mouseRadius) / spacing) * spacing + spacing / 2);
        const endY = Math.min(height, Math.ceil((mouse.y + mouseRadius) / spacing) * spacing + spacing / 2);

        for (let x = startX; x <= endX; x += spacing) {
          for (let y = startY; y <= endY; y += spacing) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseRadius) {
              const factor = 1 - dist / mouseRadius;
              const radius = baseDotRadius + factor * 0.8;
              ctx.beginPath();
              ctx.fillStyle = `rgba(168, 218, 181, ${0.16 + factor * 0.35})`;
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 2. Update Dynamic Moving Nature Elements & Graph Nodes
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const sway = Math.sin(time * 1.6 + el.swayPhase);

        if (el.type === 'leaf') {
          el.x += el.vx + sway * 0.35;
          el.y += el.vy + Math.cos(time + el.swayPhase) * 0.2;
          el.angle += el.angularSpeed + sway * 0.01;
        } else if (el.type === 'sprout') {
          el.x += el.vx * 0.45 + sway * 0.22;
          el.y += el.vy * 0.4;
          el.angle += el.angularSpeed;
        } else {
          // Graph node drift
          el.x += el.vx + Math.sin(time * 1.2 + i) * 0.2;
          el.y += el.vy + Math.cos(time * 1.2 + i) * 0.2;
        }

        // Screen wrap
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

        // Mouse wind interaction
        if (hasMouse) {
          const dx = mouse.x - el.x;
          const dy = mouse.y - el.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (1 - dist / 140) * 1.4;
            el.x -= (dx / dist) * force;
            el.y -= (dy / dist) * force;
            el.angle += force * 0.05;
          }
        }
      }

      // 3. Draw Prominent Dynamic Graph Lines / Edges
      const maxDistance = 155;
      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const dx = elements[i].x - elements[j].x;
          const dy = elements[i].y - elements[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const edgeAlpha = (1 - dist / maxDistance) * 0.32;
            ctx.strokeStyle = `rgba(135, 185, 148, ${edgeAlpha})`;
            ctx.lineWidth = 1.05;
            ctx.beginPath();
            ctx.moveTo(elements[i].x, elements[i].y);
            ctx.lineTo(elements[j].x, elements[j].y);
            ctx.stroke();
          }
        }

        // Interactive line connection to mouse cursor
        if (hasMouse) {
          const dx = mouse.x - elements[i].x;
          const dy = mouse.y - elements[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 135) {
            const edgeAlpha = (1 - dist / 135) * 0.42;
            ctx.strokeStyle = `rgba(168, 218, 181, ${edgeAlpha})`;
            ctx.lineWidth = 1.15;
            ctx.beginPath();
            ctx.moveTo(elements[i].x, elements[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 4. Render Leaves, Sprouts, and Prominent Matte Graph Nodes
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const currentAlpha = Math.min(
          0.88,
          el.alpha + Math.sin(time * 1.8 + el.swayPhase) * 0.08
        );

        if (el.type === 'leaf') {
          drawLeaf(ctx, el.x, el.y, el.size, el.angle, el.color, currentAlpha);
        } else if (el.type === 'sprout') {
          const sway = Math.sin(time * 1.6 + el.swayPhase);
          drawSprout(ctx, el.x, el.y, el.size, sway, el.color, currentAlpha);
        } else {
          // Prominent solid matte graph node (strictly NO glow halos)
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
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  );
};

