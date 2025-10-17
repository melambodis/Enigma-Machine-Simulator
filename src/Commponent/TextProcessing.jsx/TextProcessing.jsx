import React from "react";
import styles from "./TextProcessing.module.css";

const TextProcessing = () => {
  return (
    <div className={styles.textProcessing}>
      <h2>Text Processing</h2>
      <textarea placeholder="Enter your text here..."></textarea>
      <div className={styles.controls}>
        <button>Encrypt</button>
        <button>Decrypt</button>
      </div>
      <div className={styles.output}>
        <h3>Result:</h3>
        <p></p>
      </div>
    </div>
  );
};

export default TextProcessing;
