import React from 'react';

import Input from "../Input";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Badge from '../Badge';
import { checkGuess } from '../../game-helpers';
import { AnswerContext } from '../../providers/answerProvider';

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [resultStatus, setResultStatus] = React.useState(null);
  const { loading, answer } = React.useContext(AnswerContext);

  const [checkedLetters, setCheckedLetters] = React.useState({});

  const handleNewUserGuess = (value) => {
    const newGuess = {
      id: crypto.randomUUID(),
      value,
    };

    const letters = checkGuess(newGuess.value, answer);

    let patch = checkedLetters;
    letters.forEach(letterMeta => {
      function updateLetterStatus(letter, newStatus ) {
        switch(checkedLetters[letter]) {
          case 'misplaced':
          case undefined:
            patch[letter] = newStatus;
            return;
          case 'correct':
          case 'incorrect':
          default:
            return;
        }
      }

      updateLetterStatus(letterMeta.letter, letterMeta.status)
    })

    setCheckedLetters(current => ({
      ...current,
      ...patch,
    }));

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

  if (loading || !answer) return <>Загрузка...</>

  return (
    <>
      <GuessResults
        guesses={userGuesses}
        answer={answer}
      />
      <Input
        checkedLetters={checkedLetters}
        disabled={resultStatus !== null}
        onSubmit={handleNewUserGuess}
      />
      {resultStatus === "sad" && (
        <Badge type="sad">
          Не в этот раз. Правильный ответ был: {answer}
        </Badge>
      )}
      {resultStatus === "happy" && (
        <Badge type="happy">
          Поздравляю! Ты справился. Попыток: {userGuesses.length}
        </Badge>
      )}
    </>
  );
}

export default Game;
