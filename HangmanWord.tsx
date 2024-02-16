type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal,
}: HangmanWordProps) {
  // const word = "test";
  // const guessLetters = ["a", "e", "a"];
  console.log(guessedLetters);
  return (
    <div
      style={{
        display: "flex",
        gap: "5rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: "0.5rem solid #000" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {" "}
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
