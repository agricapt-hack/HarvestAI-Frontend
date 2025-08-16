import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

export const MagicalParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 4 + 2,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        >
          <div className="w-full h-full bg-magic-accent rounded-full shadow-accent opacity-70" />
        </div>
      ))}
    </div>
  );
};