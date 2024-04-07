import { useState } from "react";
import { WORD_LENGTH } from "../../constants";

import styles from "./Input.module.css";

function Input({
    onSubmit,
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value.toUpperCase());
  }

  return (
    <form
      className={styles.wrapper}
      onSubmit={handleSubmit}
    >
      <label
        className={styles.label}
        htmlFor="user-guess-input"
      >
        Your guess:
      </label>
      <input
          className={styles.input}
          id="user-guess-input"
          value={value.toUpperCase()}
          onChange={(e) => setValue(e.currentTarget.value)}
          required
          minLength={WORD_LENGTH}
          maxLength={WORD_LENGTH}
      />
    </form>
  )
}

export default Input;