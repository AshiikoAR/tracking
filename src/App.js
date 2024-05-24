import React, { useState } from "react";
import logo from './img/tracking-icon.png'; 
import daher from './img/daher.png';
import fond from './img/fond.jpg';
//import Dashboard from "./components/dashboard";

function App() {
  // Utiliser useState pour gérer l'état du portail
  const [portail, setPortail] = useState({
    type: "Portail opérateur",
    icone: "&#128187;",
    h2: "Chef d'équipe ou Team Leader"
  });

  // Utiliser useState pour gérer l'état de l'entrée
  const [inputValue, setInputValue] = useState("");

  // Fonction pour changer le type de portail et ses éléments associés
  const changerPortail = () => {
    if (portail.type === "Portail opérateur") {
      setPortail({
        type: "Portail Chef d'équipe et Teams Leaders",
        icone: "&#129466;",
        h2: "Opérateur"
      });
    } else {
      setPortail({
        type: "Portail opérateur",
        icone: "&#128451;&#65039;",
        h2: "Chef d'équipe ou Team Leader"
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Veuillez saisir un Matricule (ou un NG).");
    }
  };

  return (
    <div className="App">
      <div className="background">
        <img src={fond} alt="" className="background-wallpaper"/>
        <div className="background-color"/>
        <p className="versionning">Daher Hub Ouest - ALPHA 0.1.1</p>
      </div>
      <div className="Form-conn">
        <p className="TypePortail">{portail.type}</p>
        <img src={logo} alt="Logo TRACKING" className="Logo-conn" title="[ TRACKING ]"/>
        <h1>[ TRACKING ]</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="Mdp-conn"
            id="pin"
            type="text"
            minLength="1"
            maxLength="12"
            placeholder="&#127991;&#65039; &bull; Matricule ou NG SAP"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Se connecter</button>
        </form>
        
      </div>
      <div className="SelectPortail" onClick={changerPortail}>
        <div className="img-co">
          <span dangerouslySetInnerHTML={{ __html: portail.icone }} />
        </div>
        <div className="PortailTxt">
          <p>Se connecter en tant que</p>
          <h2>{portail.h2}</h2>
        </div>
      </div>
      <img src={daher} alt="Logo DAHER" className="emplacement"/>
    </div>
  );
}

export default App;