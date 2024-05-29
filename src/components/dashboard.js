import React from "react";

import logo from '../img/tracking-icon.png'; 
import ChoixAct from "./choix-act";

function Dashboard({ user }) {
    const handleLogout = () => {
        window.location.href = ""; // Redirection vers l'interface de connexion
    };

    return (
        <div>
            <div className="connexion-ope">
                <img src={logo} alt="Logo TRACKING" className="logo-tracking-title" title="[ TRACKING ]"/>
                <span className="nav">
                    <button className="menu-title">&#127968; Accueil</button>
                    <button className="menu-title">&#128200; Avancement</button>
                    <button className="menu-title">&#128735; Support</button>
                </span>
                <span className="ope">
                    <span className="infos-ope" title="">&#129466;{user && <span>{user.prenom} {user.nom} <br/> <b>[Matricule {user.matricule}]</b></span>} </span>
                    <button onClick={handleLogout}>&#128268; Déconnexion</button>
                </span>
            </div>
            <ChoixAct />
        </div>
    );
}

export default Dashboard;