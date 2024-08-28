import React, { useState, useEffect } from "react";
import ChoixAct from "./choix-act";
import Avancement from "./av-ope";
import Support from "./support";


function DashboardOpe({ user }) {
    const [selectedComponent, setSelectedComponent] = useState("Accueil");

    const handleLogout = () => {
        window.location.href = ""; // Redirection vers l'interface de connexion
    };

    useEffect(() => {
        document.title = `TRACKING - ${selectedComponent}`;
    }, [selectedComponent]);

    return (
        <div>
            <h1>[TRACKING]</h1>
            <div className="connexion-ope">
                <span className="nav">
                    <button className="menu-title" onClick={() => setSelectedComponent("Accueil")}>Accueil</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Avancement")}>Avancement</button>
                    <button className="menu-title" onClick={() => setSelectedComponent("Support")}>Support</button>
                </span>
                <span className="ope">
                    <span className="infos-ope" title="">{user && <span>{user.prenom} {user.nom} <b>[Matricule {user.matricule}]</b></span>} </span>
                    <button onClick={handleLogout}>Déconnexion</button>
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

export default DashboardOpe;
