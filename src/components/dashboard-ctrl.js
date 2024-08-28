import React, { useState, useEffect } from "react";
import InfosKPI from "./infos-kpi";
import Recherche from "./rech";
import Support from "./support";

function DashboardCtrl({ user, dataOpe, dataActi }) {
    const [selectedComponent, setSelectedComponent] = useState("Dashboard");

    const handleLogout = () => {
        window.location.href = ""; // Redirection vers l'interface de connexion
    };

    useEffect(() => {
        document.title = `TRACKING - ${selectedComponent}`;
    }, [selectedComponent]);

    return (
        <div>
            <h1>[TRACKING]</h1>
            <div classNameName="connexion-ope">
                <span classNameName="nav">
                    <button classNameName="menu-title" onClick={() => setSelectedComponent("Dashboard")}>Dashboard</button>
                    <button classNameName="menu-title" onClick={() => setSelectedComponent("Recherche")}>Recherche</button>
                    <button classNameName="menu-title" onClick={() => setSelectedComponent("Support")}>Effectifs</button>
                    <button classNameName="menu-title" onClick={() => setSelectedComponent("Support")}>Suivi journée</button>
                    <button classNameName="menu-title" onClick={() => setSelectedComponent("Support")}>Support</button>
                </span>
                <span classNameName="ope">
                    <span classNameName="infos-ope" title="">{user && <span>{user.prenom} {user.nom} <b>[Matricule {user.matricule}]</b></span>} </span>
                    <button onClick={handleLogout}>Déconnexion</button>
                </span>
            </div>
            <div classNameName="scrollable-content">
                {selectedComponent === "Dashboard" && <InfosKPI dataOpe={dataOpe} />}
                {selectedComponent === "Recherche" && <Recherche dataOpe={dataOpe} dataActi={dataActi} />}
                {selectedComponent === "Support" && <Support />}
            </div>
        </div>
    );
}

export default DashboardCtrl;
