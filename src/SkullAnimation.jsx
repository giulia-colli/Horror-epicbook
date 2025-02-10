import React, { useEffect, useState } from 'react';
import './SkullAnimation.css';

const SkullAnimation = () => {
  const [showSkulls, setShowSkulls] = useState(true);
  const [skulls, setSkulls] = useState([]);

  useEffect(() => {
    // Genera 15 teschietti in posizioni casuali
    const generateSkulls = () => {
      const newSkulls = [];
      for (let i = 0; i < 15; i++) {
        newSkulls.push({
          id: i,
          left: Math.random() * 100, // Posizione orizzontale casuale
          animationDuration: Math.random() * 2 + 3, // Durata casuale tra 3 e 5 secondi
          delay: Math.random() * 3, // Ritardo casuale tra 0 e 3 secondi
        });
      }
      setSkulls(newSkulls);
    };

    generateSkulls();

    // Dopo 20 secondi, nasconde i teschietti
    const timer = setTimeout(() => {
      setShowSkulls(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showSkulls && (
      <div className="skull-container">
        {skulls.map((skull) => (
          <span
            key={skull.id}
            className="skull"
            style={{
              left: `${skull.left}%`,
              animationDuration: `${skull.animationDuration}s`,
              animationDelay: `${skull.delay}s`,
            }}
          >
            ☠️
          </span>
        ))}
      </div>
    )
  );
};

export default SkullAnimation;
