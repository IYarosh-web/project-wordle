import React from "react";
import { ANSWER_URL } from "../constants";

export const AnswerContext = React.createContext();

export default function AnswerProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [answer, setAnswer] = React.useState(undefined);

  React.useEffect(
    () => {
      setLoading(true);
      fetch(ANSWER_URL)
        .then(response => response.text())
        .then(answer => setAnswer(answer.trim()))
        .finally(() => setLoading(false));
    },
    [],
  );

  return (
    <AnswerContext.Provider
      value={{
        loading,
        answer,
      }}
    >
      {children}
    </AnswerContext.Provider>
  )
}
