import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

function GuessInput({ guesses, setGuesses, answer }) {
  const [guess, setGuess] = React.useState("");
  const lastGuess = guesses[guesses.length - 1];
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
          const nextGuesses = [...guesses, guess];
          setGuesses(nextGuesses);
        }
        setGuess("");
      }}
    >
      <label htmlFor="guess-input" className="guess-input-wrapper">
        Enter guess:
      </label>
      {guesses.length < 6 && lastGuess !== answer ? (
        <input
          required
          pattern="[a-zA-Z]{5}"
          title="5-letter word"
          id="guess-input"
          className="guess-input-wrapper"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      ) : (
        <HappyBanner numGuesses={guesses.length} />
      )}
      {guesses.length === 6 && lastGuess !== answer && (
        <SadBanner answer={answer} />
      )}
    </form>
  );
}

export default GuessInput;
