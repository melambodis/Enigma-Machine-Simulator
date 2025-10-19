import React, { useContext } from "react";
import styles from "./Plugboard.module.css";
import RotorContext from "../../usecontext/Rotorsting";
import { X } from "lucide-react";
import PlugboardContext from "../../usecontext/useplugboard";
const Plugboard = () => {
  const { alphabetStatic } = useContext(RotorContext);
  const {
    cheackplugvalu,
    ConnectingChar,
    TransChar,
    deleteConnection,
    connections,
    connectchar,
  } = useContext(PlugboardContext);
  return (
    <div className={styles.plugboard}>
      <h3>Plugboard Connections</h3>
      <div className={styles.alphabet}>
        {alphabetStatic.split("").map((char, index) => {
          const hidden = TransChar(char);
          return (
            <span
              key={index}
              className={`${styles.letter} ${hidden ? styles.hidden : ""}`}
            >
              {char}
            </span>
          );
        })}
      </div>
      <div className={styles.connectionInputs}>
        <input
          name="inputA"
          value={connectchar.find((i) => i.name === "inputA").value}
          onChange={cheackplugvalu}
          type="text"
          maxLength="1"
          placeholder="A"
        />
        <input
          name="inputB"
          onChange={cheackplugvalu}
          value={connectchar.find((i) => i.name === "inputB").value}
          type="text"
          maxLength="1"
          placeholder="Z"
        />
        <button onClick={ConnectingChar} className={styles.connectBtn}>
          Connect
        </button>
      </div>
      <div className={styles.connectionList}>
        {connections.map((pair, i) => {
          return (
            <div key={i} className={styles.connectionItem}>
              <span className={styles.from}>{pair.from}</span>
              <span className={styles.arrow}> ↔ </span>
              <span className={styles.to}>{pair.to}</span>
              {/* <button onClick={() => deleteConnection(pair.from)}>Delete</button> */}
              <button
                onClick={() => deleteConnection(pair.from)}
                className={styles.deleteBtn}
                title="Remove connection"
              >
                <X size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Plugboard;
