import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
// import Routes, Route dan Link pada react-router-dom
import { Routes, Route, Link } from "react-router-dom";
import CustomForm from "./components/CustomForm";

function App() {
  // // Membuat State
  // // asumsi hanya ada first dan second
  // // const [position, setPosition] = useState("first");
  // // Membuat handler onClick
  // // const handlerClick = (event, position) => {
  // // mencegah refresh page dengan event dan disertai dengan preventDefault
  // // event.preventDefault();
  // // setPosition(position);
  // // };

  return (
    <div className="App">
      {/* Mendiskripsikan Routes */}
      <Routes>
        {/* Mendiskripsikan Routenya atau jalur rute nya*/}
        {/* menerima atribute dengan path dan elementnya
        itu berarti jika path sebagai rute misal kan local:3000/ itu akan menampilkan komponen apa? */}
        {/* Dibawah digunakan untuk component Home (Hanya untuk pembelajaran)*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="formulir" element={<CustomForm />} />
      </Routes>

      {/* Membuat navbar sederhana
      <span style={{ display: "flex", gap: "0.5em" }}>
        {/* menggunakan onClick */}
      {/* <a href="/" onClick={(event) => handlerClick(event, "first")}> */}
      {/* Component Pertama  */}
      {/* </a> */}
      {/* <a href="/" onClick={(event) => handlerClick(event, "second")}> */}
      {/* Component Kedua  */}
      {/* </a> */}
      {/* </span> */}
      {/* Kekurangan conditional rendering adalah saat berada pada halaman tertentu jika kira refresh maka akan kembali ke halaman utamanya */}
      {/* <h3>Menggunakan Conditional rendering dengan ternary</h3> */}
      {/* Menggunakan conditional rendering dengan ternary */}
      {/* {position === "first" ? <FirstComponent /> : <SecondComponent />} */}
      {/* <FirstComponent /> */}
      {/* <SecondComponent /> */}
    </div>
  );
}

// Hanya untuk pembelajaran tidak untuk production
function Home() {
  return (
    <>
      <main>
        <h1>Ayo ke About boleh klik link dibawah ini</h1>
        <p>lorem ipsum</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/formulir">Formulir</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h1>Ayo ke Home boleh klik link dibawah ini</h1>
        <p>lorem ipsum</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
