import React from "react";
import Conn from "./components/conn.js";

function App({ dataOpe }) {
  return (
    <div className="App">
      <Conn dataOpe={dataOpe} />
    </div>
  );
}

export default App;