import React, { useEffect, useRef } from 'react';

export const DotMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 32;
    const baseRadius = 0.75;

    const drawGrid = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(189, 175, 153, 0.04)';

      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, baseRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    drawGrid();
    window.addEventListener('resize', drawGrid);

    return () => {
      window.removeEventListener('resize', drawGrid);
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
