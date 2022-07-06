import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  // Membuat State
  // asumsi hanya ada first dan second
  const [position, setPosition] = useState("first");
  // Membuat handler onClick
  const handlerClick = (event, position) => {
    // mencegah refresh page dengan event dan disertai dengan preventDefault
    event.preventDefault();
    setPosition(position);
  };

  return (
    <div className="App">
      {/* Membuat navbar sederhana */}
      <span style={{ display: "flex", gap: "0.5em" }}>
        {/* menggunakan onClick */}
        <a href="/" onClick={(event) => handlerClick(event, "first")}>
          Component Pertama
        </a>
        <a href="/" onClick={(event) => handlerClick(event, "second")}>
          Component Kedua
        </a>
      </span>
      {/* Kekurangan conditional rendering adalah saat berada pada halaman tertentu jika kira refresh maka akan kembali ke halaman utamanya */}
      <h3>Menggunakan Conditional rendering dengan ternary</h3>
      {/* Menggunakan conditional rendering dengan ternary */}
      {position === "first" ? <FirstComponent /> : <SecondComponent />}
      {/* <FirstComponent />
      <SecondComponent /> */}
    </div>
  );
}

export default App;
