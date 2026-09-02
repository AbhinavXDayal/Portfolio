import React, { useEffect, useRef } from 'react';

interface GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
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

    // Soft nature matte colors for graph nodes
    const nodeColors = [
      'rgba(126, 169, 132, 0.45)', // herbal sage
      'rgba(91, 139, 103, 0.45)',  // forest green
      'rgba(163, 206, 179, 0.45)', // tender mint
    ];

    // Grid config: reduced quantity, clean spacing
    const spacing = 44;
    const baseDotRadius = 0.5;

    // Sparse Graph Nodes (reduced overall quantity: only 16 to 22 nodes across screen)
    const nodeCount = Math.min(Math.floor((width * height) / 48000), 20);
    const nodes: GraphNode[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1.2 + Math.random() * 0.6, // small matte points (NO glow)
        color: nodeColors[i % nodeColors.length],
        alpha: 0.35 + Math.random() * 0.25,
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

    const render = () => {
      if (!canvas || !ctx) return;
      time += 0.012;

      // Smooth mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const hasMouse = mouse.x > 0 && mouse.y > 0;

      // 1. Dynamic Moving Dot Matrix (clean, non-glowing, subtle organic micro-wave)
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          // Gentle ambient wave motion
          const wave = Math.sin(time + (x * 0.015) + (y * 0.015)) * 0.35;
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

          // Clean matte dot (NO blur, NO glow)
          ctx.fillStyle = `rgba(126, 169, 132, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Update Dynamic Moving Graph Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx + Math.sin(time + i) * 0.15;
        node.y += node.vy + Math.cos(time + i) * 0.15;

        // Screen wrap
        if (node.x < -15) node.x = width + 15;
        if (node.x > width + 15) node.x = -15;
        if (node.y < -15) node.y = height + 15;
        if (node.y > height + 15) node.y = -15;

        // Mouse gentle deflection
        if (hasMouse) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const force = (1 - dist / 110) * 0.8;
            node.x -= (dx / dist) * force;
            node.y -= (dy / dist) * force;
          }
        }
      }

      // 3. Draw Dynamic Graph Lines / Edges (crisp, matte, thin)
      const maxDistance = 135;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const edgeAlpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(126, 169, 132, ${edgeAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Connection to mouse cursor
        if (hasMouse) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const edgeAlpha = (1 - dist / 120) * 0.2;
            ctx.strokeStyle = `rgba(163, 206, 179, ${edgeAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 4. Draw Graph Nodes (crisp matte solid dots, strictly NO glow halos)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
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
