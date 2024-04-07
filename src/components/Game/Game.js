import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Input from "../Input";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);

  const handleNewUserGuess = (value) => {
    const newGuess = {
      id: crypto.randomUUID(),
      value,
    };

    setUserGuesses([...userGuesses, newGuess]);
  }

  return (
    <>
      <GuessResults guesses={userGuesses} />
      <Input onSubmit={handleNewUserGuess} />
    </>
  );
}

export default Game;
