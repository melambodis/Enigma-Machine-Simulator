import "./App.css";
import EnigmaMachine from "./Commponent/EnigmaMachine/EnigmaMachine";
import { Intercept } from "./usecontext/useLogic";

function App() {
  return (
    <>
      <Intercept>
        <EnigmaMachine />
      </Intercept>
    </>
  );
}

export default App;
