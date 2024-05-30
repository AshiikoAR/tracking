import React, { useState, useEffect } from "react";
import logo from '../img/tracking-icon.png'; 
import ChoixAct from "./choix-act";
import Avancement from "./av-ope";
import Support from "./support";


function DashboardCtrl({ user }) {
    const [selectedComponent, setSelectedComponent] = useState("Accueil");

    const handleLogout = () => {
        window.location.href = ""; // Redirection vers l'interface de connexion
    };

    useEffect(() => {
        document.title = `TRACKING - ${selectedComponent}`;
    }, [selectedComponent]);

    return (
        <div>
            <div className="connexion-ope">
                <img src={logo} alt="Logo TRACKING" className="logo-tracking-title" title="[ TRACKING ]"/>
                <span className="nav">
                    <button className="menu-title" onClick={() => setSelectedComponent("Accueil")}>&#128202; Dashboard</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Avancement")}>&#128269; Recherche</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Support")}>&#9888;&#65039; Anomalies</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Support")}>&#128123; Absences</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Support")}>&#128735; Support</button>
                </span>
                <span className="ope">
                    <span className="infos-ope" title="">&#129466;{user && <span>{user.prenom} {user.nom} <br/> <b>[Matricule {user.matricule}]</b></span>} </span>
                    <button onClick={handleLogout}>&#128268; Déconnexion</button>
                </span>
            </div>
            {/* Wrapper pour les composants avec la barre de défilement */}
            <div className="scrollable-content">
                {/* Affichage du composant correspondant au bouton sélectionné */}
                {selectedComponent === "Accueil" && <ChoixAct />}
                {selectedComponent === "Avancement" && <Avancement />}
                {selectedComponent === "Support" && <Support />}
            </div>
        </div>
    );
}

export default DashboardCtrl;
