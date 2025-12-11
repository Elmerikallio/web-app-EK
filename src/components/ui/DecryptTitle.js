import React from "react";
import DecryptedText from "./DecryptedText";

export const DecryptTitle = ({ text }) => (
  <h1 className="page-title decrypt-title">
    <DecryptedText
      text={text}
      speed={40}
      maxIterations={18}
      animateOn="view"
      revealDirection="center"
      encryptedClassName="encrypted-letter"
    />
  </h1>
);
