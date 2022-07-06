import React from "react";
import { useNavigate } from "react-router-dom";

const CustomForm = () => {
  // Mendeklarasikan hooks
  let navigate = useNavigate();

  const handlerSubmit = (event) => {
    // untuk menggunakan link? dengan hooks useNavigate
    // gunakan preventDefault()
    event.preventDefault();
    // untuk trigger link ke /
    navigate("/");
  };

  return (
    <>
      <main>
        <form onSubmit={handlerSubmit}>
          {/* Saat tombol submit diklik maka akan pindah ke halaman / atau */}
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default CustomForm;
