
import styles from "./EnigmaMachine.module.css";
import RotorSettings from "../RotorSettings/RotorSettings";
import Plugboard from "../Plugboard/Plugboard";
import TextProcessing from "../TextProcessing.jsx/TextProcessing";
import Reflector from "../Reflector/Reflector";
import { PlugboardProvider } from "../../usecontext/useplugboard";

const EnigmaMachine = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Enigma Machine Simulator</h1>
      <div className={styles.grid}>
        <div className={`${styles.panel} ${styles.settingsPanel}`}>
          <h2>Settings</h2>
          <PlugboardProvider>
          <Plugboard />
          </PlugboardProvider>
          <>
         
          <RotorSettings />
          
          </>
        </div>
        <div className={`${styles.panel} ${styles.textPanel}`}>
          <TextProcessing />
        </div>
          <Reflector />
      </div>
    </div>
  );
};
export default EnigmaMachine;
