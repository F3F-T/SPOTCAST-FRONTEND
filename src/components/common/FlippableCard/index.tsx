"use client";

import React, { useState } from "react";
import "./style.css";

interface FlippableProps {
  frontCard: React.ReactNode;
  backCard: React.ReactNode;
  width: string;
  height: string;
}

function FlippableCard({ frontCard, backCard, width, height }: FlippableProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      style={{ width, height }}
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="front">{frontCard}</div>
      <div className="back">{backCard}</div>
    </div>
  );
}

export default FlippableCard;
