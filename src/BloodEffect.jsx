import React, { useState, useEffect } from 'react';
import './BloodEffect.css'; 

const BloodEffect = () => {
  const [bloodSplats, setBloodSplats] = useState([]);

  const addBloodSplat = (event) => {
    const newSplat = {
      id: Date.now(),
      left: event.clientX,
      top: event.clientY,
    };
    setBloodSplats((prevSplats) => [...prevSplats, newSplat]);

   
    setTimeout(() => {
      setBloodSplats((prevSplats) => prevSplats.filter((splat) => splat.id !== newSplat.id));
    }, 5000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', addBloodSplat);
    return () => {
      window.removeEventListener('mousemove', addBloodSplat);
    };
  }, []);

  return (
    <div className="blood-container">
      {bloodSplats.map((splat) => (
        <div
          key={splat.id}
          className="blood-splat"
          style={{ left: splat.left, top: splat.top }}
        />
      ))}
    </div>
  );
};

export default BloodEffect;
