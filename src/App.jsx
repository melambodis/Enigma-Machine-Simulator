import "./App.css";
import EnigmaMachine from "./Commponent/EnigmaMachine/EnigmaMachine";
import { RotorProvider } from "./usecontext/Rotorsting";


function App() {
  return (
    <>
    <RotorProvider>
        <EnigmaMachine />
    </RotorProvider>
    </>
  );
}

export default App;
