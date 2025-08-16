import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export const TypewriterText = ({ 
  text, 
  speed = 100, 
  onComplete, 
  className = "" 
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  return (
    <div className={`relative ${className}`}>
      <span 
        className="bg-gradient-text bg-clip-text text-transparent"
        style={{ textShadow: 'var(--glow-text)' }}
      >
        {displayedText}
      </span>
      <span className="ml-1 animate-blink text-magic-accent">|</span>
    </div>
  );
};