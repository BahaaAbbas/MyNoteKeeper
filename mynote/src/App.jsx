import { useState } from "react";

import "./App.css";
import Note from "./pages/Note";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="app">
        <Note />

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
