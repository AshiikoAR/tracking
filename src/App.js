import React from "react";
import logo from './img/tracking-icon.png'; 
import daher from './img/daher.png';
import fond from './img/fond.jpg';
//import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <div className="background">
        <img src={fond} alt="" className="background-wallpaper"/>
        <div className="background-color"/>
        <p className="versionning">Daher Hub Ouest - ALPHA 0.1.1</p>
      </div>
      <div className="Form-conn">
        <p className="TypePortail">Portail opérateur</p>
        <img src={logo} alt="Logo TRACKING" className="Logo-conn" title="[ TRACKING ]"/>
        <h1>[ TRACKING ]</h1>
        <form>
          <input
            className="Mdp-conn"
            id="pin"
            type="text"
            minlength="1"
            maxlength="12"
            placeholder="&#127991;&#65039; &bull; Matricule ou NG SAP"
          />
        </form>
        <button type="submit" /*onClick={}*/>Se connecter</button>
      </div>
      <div className="SelectPortail">
        <div className="img-co">
          {/* Icône pour les opérateurs : &#129466;*/}
          &#128187;
        </div>
        <div className="PortailTxt">
          <p>Se connecter en tant que</p>
          <h2>Chef d'équipe ou Team Leader</h2>
        </div>
      </div>
      <img src={daher} alt="Logo DAHER" className="emplacement"/>
    </div>
  );
}

export default App;