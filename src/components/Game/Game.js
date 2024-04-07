import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Input from "../Input";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Badge from '../Badge';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [resultStatus, setResultStatus] = React.useState(null); 

  const handleNewUserGuess = (value) => {
    const newGuess = {
      id: crypto.randomUUID(),
      value,
    };

    const nextUserGuesses = [...userGuesses, newGuess];
    setUserGuesses(nextUserGuesses);

    if (nextUserGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setResultStatus("sad");
    }

    const hasRightAnswer = nextUserGuesses.some(guess => guess.value === answer);
    if (hasRightAnswer) {
      setResultStatus("happy");
    }
  }

  return (
    <>
      <GuessResults
        guesses={userGuesses}
        answer={answer}
      />
      <Input
        disabled={resultStatus !== null}
        onSubmit={handleNewUserGuess}
      />
      {resultStatus === "sad" && (
        <Badge type="sad">
          Sorry, the right answer is {answer}
        </Badge>
      )}
      {resultStatus === "happy" && (
        <Badge type="happy">
          Congratulations! You got it in {userGuesses.length} guesses.
        </Badge>
      )}
    </>
  );
}

export default Game;
