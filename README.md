🔐 Enigma Machine Simulator

A modern, interactive web-based simulator of the World War II Enigma Machine, built with React.js.
This project visually demonstrates how messages were encrypted and decrypted using rotors, a plugboard, and a reflector — just like the historical device.

🚀 Features

🎛️ Plugboard System: Connect letter pairs (A↔B) visually with dynamic color feedback.

⚙️ Rotor Settings: Customize rotor positions and view static vs dynamic alphabets.

🔁 Reflector Panel: Simulates the signal reflection stage in the Enigma process.

✍️ Text Processing Panel: Encrypt and decrypt input text with one click.

🎨 Modern UI: Built with CSS Modules and responsive grid layout.

💡 Modular Architecture: Each Enigma component (Plugboard, Rotor, Reflector, Text) is fully separated for easy development.

🧠 How It Works (Concept)

The Enigma Machine encrypts messages by passing each character through multiple transformations:

Plugboard: Swaps letters based on user-defined connections.

Rotors: Shift letters using internal wiring and rotation logic.

Reflector: Sends the signal back through the rotors, producing a symmetric encryption.

Output: The encrypted character appears as lighted output.

(Currently in progress — future versions will simulate full encryption logic.)

🛠️ Tech Stack
Technology	Description
React.js	Core framework for UI and logic.
CSS Modules	Scoped and modular styling.
JavaScript (ES6+)	Main language used for encryption logic.
Context API	State management between components.
⚙️ Core Logic: Rotor Management System

From the very beginning of the project, a Rotor Context Logic was implemented to manage the internal behavior of the Enigma rotors.
This logic forms the foundation for all encryption-related operations in the simulator.



🎯 Purpose

The rotor logic enables flexible, accurate, and realistic control of the Enigma’s inner mechanism — laying the groundwork for future updates like rotor stepping,.

👨‍💻 Author

Mahmoud Amer
Front-End Developer | 🇪🇬 Egypt
📧 Contact:[melambodis@gmail.com]
💬 “Just ambition.”


## 🆕 Updates
- **[2025-10-20]** Added new feature: `PlugboardContext`  
  Manages letter connections and prevents duplicate pairings in Enigma simulation.

