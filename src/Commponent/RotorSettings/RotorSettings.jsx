import React, { useContext } from "react";
import styles from "./RotorSettings.module.css";
import RotorContext from "../../usecontext/Rotorsting";

const RotorSettings = () => {
  const { alphabetStatic, rotors, setRotorStart } = useContext(RotorContext);

  return (
    <div className={styles.rotorSettings}>
      {rotors.map((num, index) => (
        <div className={styles.rotorInput} key={index}>
          <label>{num.name}:</label>
          <input
            type="text"
            placeholder="A-Z"
            maxLength="1"
            className={styles.input}
            onChange={(e) =>
              setRotorStart(num.name, e.target.value.toUpperCase())
            }
          />
          <div className={styles.alphabetDisplay}>
            <div className={styles.staticAlphabet}>
              {alphabetStatic.split("").map((char, index) => (
                <span
                  key={index}
                  className={styles.staticLetter}
                  data-letter={char}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className={styles.dynamicAlphabet}>
              {num.value.map((char, index) => (
                <span
                  key={index}
                  className={styles.staticLetter}
                  data-letter={char}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button className={styles.button}>Save Settings</button>
    </div>
  );
};

export default RotorSettings;
