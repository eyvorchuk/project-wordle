import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess} guess={guess} answer={answer} />
      ))}
      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess key={index} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
