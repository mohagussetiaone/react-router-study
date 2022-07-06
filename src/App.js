import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  // Membuat State
  // asumsi hanya ada first dan second
  const [position, setPosition] = useState("first");
  // Membuat handler onClick
  const handlerClick = (position) => {
    setPosition(position);
  };

  return (
    <div className="App">
      {/* Membuat navbar sederhana */}
      <span style={{ display: "flex", gap: "0.5em" }}>
        {/* menggunakan onClick */}
        <a href="#" onClick={() => handlerClick("first")}>
          Component Pertama
        </a>
        <a href="#" onClick={() => handlerClick("second")}>
          Component Kedua
        </a>
      </span>
      <h3>Menggunakan Conditional rendering dengan ternary</h3>
      {/* Menggunakan conditional rendering dengan ternary */}
      {position === "first" ? <FirstComponent /> : <SecondComponent />}
      {/* <FirstComponent />
      <SecondComponent /> */}
    </div>
  );
}

export default App;
