import { useState } from "react";

import "./App.css";
import Note from "./components/note/Note";

function App() {
  return (
    <>
      <div className="app">
        <Note />
      </div>
    </>
  );
}

export default App;
