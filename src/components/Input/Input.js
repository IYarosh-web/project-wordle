import React, { useState } from "react";

import Keyboard from "../Keyboard";
import { AnswerContext } from "../../providers/answerProvider";

import styles from "./Input.module.css";
import { getPressedLetter } from "../../game-helpers";

function Input({
    checkedLetters,
    disabled,
    onSubmit,
}) {
  const formRef = React.useRef();
  const inputRef = React.useRef();
  const [value, setValue] = useState("");

  const { answer } = React.useContext(AnswerContext);
  const WORD_LENGTH = answer.length;

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      onSubmit(value.toUpperCase());
      setValue("");
    },
    [onSubmit, value],
  )

  const handleAddToInput = React.useCallback(
    (newLetter) => {
      setValue(v => (v + newLetter).slice(0, WORD_LENGTH));
    },
    [WORD_LENGTH],
  )

  React.useEffect(
    () => {
      const keyDownHandler = (e) => {
        if (disabled) return;

        const activeElement = document.activeElement;
        if (activeElement === inputRef.current) return;

        const isBackspace = e.code === "Backspace";
        if (isBackspace) {
          setValue(v => v.slice(0, -1));
        }
        const isEnter = e.key === "Enter";
        if (isEnter) {
          formRef.current.requestSubmit();
        }

        const pressedLetter = getPressedLetter(e);
        if (pressedLetter) {
          handleAddToInput(pressedLetter)
        }
      }

      window.addEventListener("keydown", keyDownHandler);
        
      return () => {
        window.removeEventListener("keydown", keyDownHandler);
      }
    },
    [disabled, handleSubmit, handleAddToInput],
  );

  return (
    <form
      ref={formRef}
      className={styles.wrapper}
      onSubmit={handleSubmit}
    >
      <label
        className={styles.label}
        htmlFor="user-guess-input"
      >
        Ввод:
      </label>
      <input
          ref={inputRef}
          className={styles.input}
          id="user-guess-input"
          disabled={disabled}
          value={value.toUpperCase()}
          onChange={(e) => setValue(e.currentTarget.value)}
          required
          pattern={[`[а-яА-Я]{${WORD_LENGTH}}`]}
          minLength={WORD_LENGTH}
          maxLength={WORD_LENGTH}
      />
      <Keyboard
        disabled={disabled}
        checkedLetters={checkedLetters}
        onLetterInput={handleAddToInput}
      />
    </form>
  )
}

export default Input;