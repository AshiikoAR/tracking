import React from "react";
import logo from './img/tracking-icon.png'; 
import daher from './img/daher.png';

//import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <p className="versionning">Daher Hub Ouest - ALPHA 0.1.1</p>
      <p className="TypePortail">Portail opérateur</p>
      <div className="Form-conn">
        <img src={logo} className="Logo-conn"/>
        <h1>[TRACKING]</h1>
        <form>
          <input
            className="Mdp-conn"
            id="pin"
            type="password"
            minlength="1"
            maxlength="12"
            placeholder="&#127991;&#65039; &bull; Matricule ou NG SAP"
          />
        </form>
        <button type="submit" /*onClick={}*/>Connection</button>
      </div>
      <img src={daher} className="emplacement"/>
    </div>
  );
}

export default App;