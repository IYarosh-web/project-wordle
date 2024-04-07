import { useState } from "react";
import { WORD_LENGTH } from "../../constants";

import styles from "./Input.module.css";

function Input({
    disabled,
    onSubmit,
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value.toUpperCase());
    setValue("");
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
          disabled={disabled}
          value={value.toUpperCase()}
          onChange={(e) => setValue(e.currentTarget.value)}
          required
          pattern={[`[a-zA-Z]{${WORD_LENGTH}}`]}
          minLength={WORD_LENGTH}
          maxLength={WORD_LENGTH}
      />
    </form>
  )
}

export default Input;