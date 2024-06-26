import * as styles from "./GuessResults.module.css";

import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { range } from "../../utils";

function GuessResults({
  guesses = [],
  answer = "",
}) {
  return (
    <div className={styles.wrapper}>
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <Guess
          key={guess.id || index}
          answer={answer}
          value={guesses[index]?.value}
        />
      ))}
    </div>
  );
}

export default GuessResults;
