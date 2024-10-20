import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess = "", answer }) {
  const guessStatus =
    guess === ""
      ? new Array(5).fill({ letter: "", status: "" })
      : checkGuess(guess, answer);
  return (
    <p className="guess">
      {guessStatus.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`.trim()}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
