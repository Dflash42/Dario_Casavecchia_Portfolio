import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const orbs = [
  { size: 500, x: "15%", y: "10%", color: "hsl(221, 83%, 53%)", opacity: 0.06, duration: 25 },
  { size: 400, x: "75%", y: "20%", color: "hsl(210, 76%, 50%)", opacity: 0.05, duration: 30 },
  { size: 350, x: "60%", y: "55%", color: "hsl(217, 91%, 60%)", opacity: 0.04, duration: 28 },
  { size: 450, x: "25%", y: "70%", color: "hsl(221, 70%, 55%)", opacity: 0.05, duration: 32 },
  { size: 300, x: "85%", y: "75%", color: "hsl(210, 60%, 55%)", opacity: 0.04, duration: 22 },
];

const Particle = ({ delay }: { delay: number }) => {
  const startX = Math.random() * 100;
  const size = Math.random() * 3 + 1.5;
  const duration = Math.random() * 20 + 25;

  return (
    <motion.div
      className="absolute rounded-full bg-primary/20"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        bottom: "-5%",
      }}
      animate={{
        y: [0, -window.innerHeight * 1.2],
        x: [0, (Math.random() - 0.5) * 150],
        opacity: [0, 0.6, 0.4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Reduce particles on mobile
    const count = window.innerWidth < 768 ? 12 : 20;
    setParticles(Array.from({ length: count }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Floating gradient orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            opacity: orb.opacity,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 20, -40, 0],
            scale: [1, 1.08, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rising particles */}
      {particles.map((i) => (
        <Particle key={`particle-${i}`} delay={i * 1.8} />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(221, 83%, 53%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(221, 83%, 53%) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
