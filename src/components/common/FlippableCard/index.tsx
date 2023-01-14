/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from "react";
import styles from "./index.module.css";

interface FlippableProps {
  frontCard: React.ReactNode;
  backCard: React.ReactNode;
  width: string;
  height: string;
}

function FlippableCard({ frontCard, backCard, width, height }: FlippableProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.card}>
      {isFlipped ? (
        <div
          style={{ width, height }}
          className={styles.flippedCard}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={styles.front}>{frontCard}</div>
          <div className={styles.back}>{backCard}</div>
        </div>
      ) : (
        <div
          style={{ width, height }}
          className={styles.card}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={styles.front}>{frontCard}</div>
          <div className={styles.back}>{backCard}</div>
        </div>
      )}
    </div>
  );
}

export default FlippableCard;
