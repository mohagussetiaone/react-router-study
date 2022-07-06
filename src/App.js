import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  // Membuat State
  // asumsi hanya ada first dan second
  const [position, setPosition] = useState("first");
  return (
    <div className="App">
      {/* Menggunakan conditional rendering dengan ternary */}
      {position === "first" ? <FirstComponent /> : <SecondComponent />}
      {/* <FirstComponent />
      <SecondComponent /> */}
    </div>
  );
}

export default App;
