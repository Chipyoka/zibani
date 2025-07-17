import { useEffect, useState } from 'react';

const AudioWave = ({ isPlaying = false, size = 48 }) => {
  const [animationValues, setAnimationValues] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    if (!isPlaying) {
      setAnimationValues([0, 0, 0, 0, 0]);
      return;
    }

    const interval = setInterval(() => {
      setAnimationValues(
        Array(5).fill(0).map(() => Math.random() * 0.8 + 0.2) // Values between 0.2 and 1.0
      );
    }, 200); // Update animation every 200ms

    return () => clearInterval(interval);
  }, [isPlaying]);

  const barStyle = {
    width: `${size / 10}px`,
    marginRight: `${size / 20}px`,
  };

  return (
    <div 
      className="flex items-end"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {animationValues.map((value, index) => (
        <div
          key={index}
          className="bg-blue-500 rounded-sm transition-all duration-200 ease-in-out"
          style={{
            ...barStyle,
            height: isPlaying ? `${value * size}px` : `${size * 0.3}px`,
            backgroundColor: isPlaying ? 'var(--ztpink)' : 'var(--ztgray)', 
          }}
        />
      ))}
    </div>
  );
};

export default AudioWave;