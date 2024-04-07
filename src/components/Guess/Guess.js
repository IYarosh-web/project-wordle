import React from 'react';

import { WORD_LENGTH } from '../../constants';

import { range } from '../../utils';

import * as styles from "./Guess.module.css";

function Guess({
  value = "",
}) {
  return (
    <div className={styles.wrapper}>
       {range(WORD_LENGTH).map((_, index) => (
        <span key={index} className={styles.cell}>
          <span className={styles.back}></span>
          <span className={styles.front}>{value[index]}</span>
        </span>
      ))}
    </div>
  );
}

export default Guess;
