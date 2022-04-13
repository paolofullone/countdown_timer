import React, {useState} from "react";

import song from '../../assets/Oceans.mp3'

export default function Song() {
  const [playing, setPlaying] = useState(false)
  const audio = new Audio(song);

  const start = () => {
      audio.play();
      setPlaying(true);
  };

  return (
    <div className="container">
      <button className="btn" onClick={start} disabled={playing}>♪</button>
    </div>
  );
}