import React, { useContext, useState } from "react";
import styles from "./Plugboard.module.css";
import RotorContext from "../../usecontext/useLogic";
const Plugboard = () => {
  const { alphabetStatic } = useContext(RotorContext);
    const [connections, setConnections] = useState([
      {from:"A" , to :"B"},
    ]);
    const [connectchar, setConnectchar] = useState([
      {name:"inputA" , value:""},
      {name:"inputB" , value:""}
    ]);
const cheackplugvalu= (e) => {
  const { name, value } = e.target;
setConnectchar( prev=>
  prev.map(input=>
input.name === name ? { ...input, value:value } : input
))}
console.log(connectchar[0].value);
const ConnectingChar = () => {
  const inputA = connectchar.find(i => i.name === "inputA").value;
  const inputB = connectchar.find(i => i.name === "inputB").value;
  if (
    inputA && 
    inputB&&
    inputA !== inputB &&
    !connections.some(
      (i) =>
      i.from ===inputA ||
      i.to ===inputA ||
      i.from ===inputB ||
      i.to ===inputB 
    )
  ){
    setConnections(prev => [...prev, { from: inputA, to: inputB }]);
  setConnectchar([
        { name: "inputA", value: "" },
        { name: "inputB", value: "" },
      ]);}
}
// const Connectedkhy = (char) => {
//   const isConnected = connections.some(
//     (i) => i.from === char || i.to === char
//   );
//   return isConnected;
// };

  return (
    <div className={styles.plugboard}>
      <h3>Plugboard Connections</h3>
      <div className={styles.alphabet}>
        {alphabetStatic.split("").map((char, index) => (
          <span key={index} classN className={`${styles.letter} `}>
            {char}
          </span>
        ))}
      </div>
      <div className={styles.connectionInputs}>
        <input
        name="inputA"
          onChange={ cheackplugvalu}
          type="text"
          maxLength="1"
          placeholder="A"
        />
        <input
        name="inputB"
          onChange={cheackplugvalu}
          type="text"
          maxLength="1"
          placeholder="Z"
        />
        <button 
        onClick={ConnectingChar}
        className={styles.connectBtn}>Connect</button>
      </div>
      <div className={styles.connectionList}></div>
    </div>
  );
};
export default Plugboard;




// import React, { useContext, useState } from "react";
// import styles from "./Plugboard.module.css";
// import RotorContext from "../../usecontext/useLogic";

// const Plugboard = () => {
//   const { alphabetStatic } = useContext(RotorContext);

//   const [connections, setConnections] = useState([
//     {  },
//     { },
//   ]);

//   const [connectchar, setConnectchar] = useState([
//     { name: "inputA", value: "" },
//     { name: "inputB", value: "" },
//   ]);

//   const colors = [
//     "#ff7675",
//     "#74b9ff",
//     "#55efc4",
//     "#ffeaa7",
//     "#a29bfe",
//     "#fd79a8",
//     "#00cec9",
//     "#fab1a0",
//   ]; // ألوان مختلفة لكل زوج

//   const cheackplugvalu = (e) => {
//     const { name, value } = e.target;
//     setConnectchar((prev) =>
//       prev.map((input) =>
//         input.name === name ? { ...input, value: value.toUpperCase() } : input
//       )
//     );
//   };

//   const ConnectingChar = () => {
//     const inputA = connectchar.find((i) => i.name === "inputA").value;
//     const inputB = connectchar.find((i) => i.name === "inputB").value;

//     if (
//       inputA &&
//       inputB &&
//       inputA !== inputB &&
//       !connections.some(
//         (i) =>
//           i.from === inputA ||
//           i.to === inputA ||
//           i.from === inputB ||
//           i.to === inputB
//       )
//     ) {
//       setConnections((prev) => [...prev, { from: inputA, to: inputB }]);
//     }

//     setConnectchar([
//       { name: "inputA", value: "" },
//       { name: "inputB", value: "" },
//     ]);
//   };

//   // 🧠 دالة ترجع اللون الخاص بالحرف
//   const getColorForChar = (char) => {
//     const index = connections.findIndex(
//       (i) => i.from === char || i.to === char
//     );
//     return index !== -1 ? colors[index % colors.length] : null;
//   };

//   return (
//     <div className={styles.plugboard}>
//       <h3>Plugboard Connections</h3>

//       {/* الحروف */}
//       <div className={styles.alphabet}>
//         {alphabetStatic.split("").map((char, index) => {
//           const color = getColorForChar(char);
//           return (
//             <span
//               key={index}
//               className={styles.letter}
//               style={{
//                 backgroundColor: color || "transparent",
//                 color: color ? "#fff" : "#000",
//               }}
//             >
//               {char}
//             </span>
//           );
//         })}
//       </div>

//       {/* إدخال الحروف */}
//       <div className={styles.connectionInputs}>
//         <input
//           name="inputA"
//           onChange={cheackplugvalu}
//           type="text"
//           maxLength="1"
//           value={connectchar.find((i) => i.name === "inputA").value}
//           placeholder="A"
//         />
//         <input
//           name="inputB"
//           onChange={cheackplugvalu}
//           type="text"
//           maxLength="1"
//           value={connectchar.find((i) => i.name === "inputB").value}
//           placeholder="Z"
//         />
//         <button onClick={ConnectingChar} className={styles.connectBtn}>
//           Connect
//         </button>
//       </div>

//       {/* قائمة التوصيلات */}
//       <div className={styles.connectionList}>
//         {connections.map((pair, idx) => (
//           <div
//             key={idx}
//             className={styles.connectionItem}
//             style={{
//               backgroundColor: colors[idx % colors.length],
//               color: "#fff",
//             }}
//           >
//             {pair.from} ↔ {pair.to}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Plugboard;
