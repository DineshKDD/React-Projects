import { useEffect, useState, useCallback } from "react";
import words from "./wordLIst.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
function App() {
  const getWord = useCallback(() => {
    return words[Math.floor(Math.random() * words.length)];
  }, []);
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetter = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetter.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  console.log(wordToGuess);
  // console.log(setGuessedLetters);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  // function addGuessedLetter(letter: string) {
  //   if (guessedLetters.includes(letter)) return;
  //   setGuessedLetters((currentLetter) => [...currentLetter, letter]);
  // }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      console.log(key);

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(key);

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [getWord]);

  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          maxHeight: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}></div>
        {isWinner && "Winner!. Want to try again Refresh the page"}
        {isLoser && "Nice TRY! Do want to TRY AGIN Refresh the page"}
        <HangmanDrawing numberOfGuesses={incorrectLetter.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />

        <Keyboard
          disbaled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) => {
            wordToGuess.includes(letter);
          })}
          inactiveLetters={incorrectLetter}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </>
  );
}

export default App;
