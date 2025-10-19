import { createContext, useState } from "react";
const PlugboardContext = createContext();
export function PlugboardProvider({ children }) {
  const [connections, setConnections] = useState([]);
  const [connectchar, setConnectchar] = useState([
    { name: "inputA", value: "" },
    { name: "inputB", value: "" },
  ]);
  const cheackplugvalu = (e) => {
    const { name, value } = e.target;
    const upper = value.toUpperCase();
    setConnectchar((prev) =>
      prev.map((input) =>
        input.name === name ? { ...input, value: upper } : input
      )
    );
  };
  const ConnectingChar = () => {
    const inputA = connectchar.find((i) => i.name === "inputA").value;
    const inputB = connectchar.find((i) => i.name === "inputB").value;
    if (
      inputA &&
      inputB &&
      inputA !== inputB &&
      !connections.some(
        (i) =>
          i.from === inputA ||
          i.to === inputA ||
          i.from === inputB ||
          i.to === inputB
      )
    ) {
      setConnections((prev) => [...prev, { from: inputA, to: inputB }]);
      setConnectchar([
        { name: "inputA", value: "" },
        { name: "inputB", value: "" },
      ]);
    }
  };
  // Transferring the letters from the static state to the connected state.
  const TransChar = (char) => {
    const index = connections.findIndex(
      (i) => i.from === char || i.to === char
    );
    return index !== -1;
  };
  const deleteConnection = (from) => {
    setConnections((prev) => prev.filter((pair) => pair.from !== from));
  };
  return (
    <PlugboardContext.Provider
      value={{
        cheackplugvalu,
        ConnectingChar,
        TransChar,
        deleteConnection,
        connections,
        connectchar,
      }}
    >
      {children}
    </PlugboardContext.Provider>
  );
}
export default PlugboardContext;
