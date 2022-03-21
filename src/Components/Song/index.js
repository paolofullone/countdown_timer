import React from "react";

import song from '../../assets/Oceans.mp3'

export default function Song() {
  const audio = new Audio(song);

  const start = () => {
    audio.play();
  };

  return (
    <div className="container">
      <button className="btn" onClick={start}>Play</button>
    </div>
  );
}