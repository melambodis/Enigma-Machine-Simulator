import { createContext, useState } from "react";
const RotorContext = createContext()
export function Intercept({ children }) {
    const alphabetStatic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetDynamic = alphabetStatic.split("");
    const [rotors, setRotors] = useState([
  { name: "rotorI", value: alphabetDynamic },
  { name: "rotorII", value: alphabetDynamic },
  { name: "rotorIII", value: alphabetDynamic },
]);

    // function setRotorStart(rotor, char) {
    //     setRotors((prev) => {
    //         const rotorName = prev[rotor];
    //         const index = rotorName.indexOf(char.toUpperCase());
    //         const NowRoutr = [
    //             ...rotorName.slice(index),
    //             ...rotorName.slice(0, index),
    //         ];
    //         return { ...prev, [rotor]: NowRoutr };
    //     });
    // }
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