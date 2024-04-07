import * as styles from "./GuessResults.module.css";

function GuessResults({
  guesses = [],
}) {
  return (
    <div className={styles.wrapper}>
      {guesses.map(guess => (
        <p
          key={guess.id}
          className={styles.guess}
        >
          {guess.value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
