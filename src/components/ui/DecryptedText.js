// src/components/ui/DecryptedText.js
import React, { useState, useEffect, useRef } from "react";

const defaultCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890<>!?@#$%&*";

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 20,
  characters = defaultCharacters,
  animateOn = "load", // "load" | "view" | "hover"
  revealDirection = "left", // "left" | "right" | "center"
  className = "",
  parentClassName = "",
  encryptedClassName = "",
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  const decrypt = () => {
    if (hasAnimated && animateOn === "view") return;

    let iterations = 0;

    const interval = setInterval(() => {
      iterations++;

      const newText = text
        .split("")
        .map((char, index) => {
          if (iterations < maxIterations) {
            return characters[Math.floor(Math.random() * characters.length)];
          }
          return char;
        })
        .join("");

      setDisplayedText(newText);

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayedText(text);
        setHasAnimated(true);
      }
    }, speed);
  };

  // Animate on load
  useEffect(() => {
    if (animateOn === "load") decrypt();
  }, []);

  // Animate on hover
  const handleMouseEnter = () => {
    if (animateOn === "hover") decrypt();
  };

  // Animate when in view
  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) decrypt();
        });
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`${parentClassName}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayedText.split("").map((char, index) => (
        <span
          key={index}
          className={`${className} ${
            char === text[index] ? "" : encryptedClassName
          }`}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
