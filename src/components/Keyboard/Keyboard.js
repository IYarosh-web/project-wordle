import React from "react";

import styles from "./Keyboard.module.css";

const PATTERN = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function Keyboard() {
  return (
    <div className={styles.wrapper}>
      {PATTERN.map(lettersRow => (
        <div className={styles.row}>
          {lettersRow.map(letter => (
            <button
              className={styles.letter}
              key={letter}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard;