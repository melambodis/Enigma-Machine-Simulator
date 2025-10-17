import React from "react";
import styles from "./Reflector.module.css";

const Reflector = () => {
  return (
    <div className={styles.reflectorPanel}>
      <h3>Reflector</h3>
      <div className={styles.reflectorDisplay}>
        <div className={styles.reflectorRow}></div>
        <div className={styles.reflectorRow}></div>
      </div>
    </div>
  );
};

export default Reflector;
