import React, { useState, useEffect } from "react";

import logo from '../img/tracking-icon.png'; 
import ChoixAct from "./choix-act";
import Avancement from "./av-ope";
import Support from "./support";

function Dashboard({ user }) {
    const [selectedComponent, setSelectedComponent] = useState("Accueil"); // État pour suivre le composant sélectionné

    const handleLogout = () => {
        window.location.href = ""; // Redirection vers l'interface de connexion
    };

    const renderComponent = (component) => {
        switch (component) {
            case "Accueil": return <ChoixAct />;
            case "Avancement": return <Avancement />;
            case "Support": return <Support />;
            default: return <ChoixAct />;
        }
    };

    useEffect(() => {
        document.title = `TRACKING - ${selectedComponent}`; // Mettre à jour le titre de l'onglet
    }, [selectedComponent]);

    return (
        <div>
            <div className="connexion-ope">
                <img src={logo} alt="Logo TRACKING" className="logo-tracking-title" title="[ TRACKING ]"/>
                <span className="nav">
                    <button className="menu-title" onClick={() => setSelectedComponent("Accueil")}>&#127968; Accueil</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Avancement")}>&#128200; Avancement</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Support")}>&#128735; Support</button>
                </span>
                <span className="ope">
                    <span className="infos-ope" title="">&#129466;{user && <span>{user.prenom} {user.nom} <br/> <b>[Matricule {user.matricule}]</b></span>} </span>
                    <button onClick={handleLogout}>&#128268; Déconnexion</button>
                </span>
            </div>
            {renderComponent(selectedComponent)}
        </div>
    );
}

export default Dashboard;