import React from "react";
import Conn from "./components/conn.js";

function App({ dataOpe, dataActi}) {
  return (
    <div className="App">
      <Conn dataOpe={dataOpe} dataActi={dataActi}/>
    </div>
  );
}

export default App;