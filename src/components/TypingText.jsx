import { useEffect, useState } from "react";

function TypingText() {
  const words = [
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Problem Solver"
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    const changeWord = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearTimeout(changeWord);
  }, [charIndex, wordIndex, words]);

  return (
    <h2 className="typing">
      {text}
      <span>|</span>
    </h2>
  );
}

export default TypingText;