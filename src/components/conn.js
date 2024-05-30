import React, { useState } from "react";
import logo from '../img/tracking-icon.png'; 
import daher from '../img/daher.png';
import fond from '../img/fond.jpg';

import DashboardCtrl from "./dashboard-ctrl";

function Conn({ dataOpe }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = dataOpe.find((user) => user.matricule === inputValue || user.ng_sap === inputValue);
    if (user) {
      setInputValue("");
      setCurrentUser(user);
      setShowDashboard(true);
    } else {
      setErrorMessage("Matricule ou NG SAP invalide.");
    }
  };

  if (showDashboard) {
    return <DashboardCtrl user={currentUser} />;
  }

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
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            className="Mdp-conn"
            id="pin"
            type="text"
            minLength="1"
            maxLength="12"
            placeholder="&#127991;&#65039; &bull; Matricule ou NG SAP"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit">&#128279; Se connecter</button>
          {errorMessage && <p className="error-message">&#128680; {errorMessage}</p>}
        </form>
      </div>
      <div className="SelectPortail">
        <div className="img-co">
          <span dangerouslySetInnerHTML={{ __html: "&#128187;" }} />
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

export default Conn;