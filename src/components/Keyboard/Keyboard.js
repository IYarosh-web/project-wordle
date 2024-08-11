import React from "react";

import styles from "./Keyboard.module.css";

import { KEYBOARD_PATTERN } from "../../constants";

function Keyboard({
  disabled,
  checkedLetters,
  onLetterInput,
}) {
  const handleClick = (e) => {
    onLetterInput(e.target.name);
  }

  return (
    <div className={styles.wrapper}>
      {KEYBOARD_PATTERN.map(lettersRow => (
        <div className={styles.row}>
          {lettersRow.map(letter => (
            <button
              disabled={disabled}
              type="button"
              className={styles.letter + " " + styles[checkedLetters[letter]]}
              key={letter}
              name={letter}
              onClick={handleClick}
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