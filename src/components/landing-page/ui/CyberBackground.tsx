"use client";

import { useEffect, useRef } from "react";

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    // if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    const PARTICLE_COUNT = 70;
    const CONNECTION_DIST = 160;

    const colors = ["#00E5FF", "#3B82F6", "#10B981"];

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2,
    }));

    const packets: {
      a: number;
      b: number;
      t: number;
      speed: number;
      color: string;
    }[] = [];

    let tick = 0;

    function spawnPacket() {
      const a = Math.floor(Math.random() * PARTICLE_COUNT);
      let b = Math.floor(Math.random() * PARTICLE_COUNT);
      while (b === a) b = Math.floor(Math.random() * PARTICLE_COUNT);

      packets.push({
        a,
        b,
        t: 0,
        speed: 0.012 + Math.random() * 0.01,
        color: "#00E5FF",
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      tick++;
      if (tick % 80 === 0 && packets.length < 12) spawnPacket();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        p.phase += 0.018;
      }

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.18;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (let k = packets.length - 1; k >= 0; k--) {
        const pk = packets[k];
        pk.t += pk.speed;

        if (pk.t >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const pa = particles[pk.a];
        const pb = particles[pk.b];

        const px = pa.x + (pb.x - pa.x) * pk.t;
        const py = pa.y + (pb.y - pa.y) * pk.t;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, 7);
        grad.addColorStop(0, "rgba(0,229,255,0.9)");
        grad.addColorStop(1, "rgba(0,229,255,0)");

        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      for (const p of particles) {
        const pulse = 0.5 + 0.5 * Math.sin(p.phase);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, p.color + "40");
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.8 + 0.4 * pulse), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7 + 0.3 * pulse;
        ctx.fill();

        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div style={{ background: "#0B0F19" }} className="absolute inset-0" />

      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* <canvas ref={canvasRef} className="w-full h-full" /> */}

      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-125 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(ellipse, #00E5FF 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-150 h-100 opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, #3B82F6 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
