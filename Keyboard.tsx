import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = [
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void,
  disabled: boolean
];

function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const inActive = inactiveLetters.includes(key);
        return (
          <>
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ""}} ${
                inActive ? styles.inactive : ""
              }`}
              disabled={isActive || inActive || disabled}
              key={index}
            >
              {key}
            </button>
          </>
        );
      })}
      {/* <button
        onClick={}
        style={{
          background: "none",
          borderRadius: "20%",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        Enter
      </button> */}
    </div>
  );
}

export default Keyboard;
