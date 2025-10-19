import { createContext, useState } from "react";
const RotorContext = createContext()
export function RotorProvider({ children }) {
    const alphabetStatic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetDynamic = alphabetStatic.split("");
    const [rotors, setRotors] = useState([
  { name: "rotorI", value: alphabetDynamic },
  { name: "rotorII", value: alphabetDynamic },
  { name: "rotorIII", value: alphabetDynamic },
]);

      function setRotorStart(rotorName, char) {
    setRotors((prev) =>
      prev.map((rotor) => {
        if (rotor.name === rotorName) {
          const index = rotor.value.indexOf(char.toUpperCase());
          if (index === -1) return rotor;
          const newRotorValue = [
            ...rotor.value.slice(index),
            ...rotor.value.slice(0, index),
          ];
          return { ...rotor, value: newRotorValue };
        }
        return rotor;
      })
    );
  }
    return (
        <RotorContext.Provider
            value={{
                setRotorStart,
                rotors,
                alphabetStatic,
                alphabetDynamic,
                
            }}>
            {children}
        </RotorContext.Provider>
    )
}
export default RotorContext;