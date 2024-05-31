import React from "react";

function InfosKPI() {
    // Get current date
    const today = new Date();
    
    // Format the date to "DD MMM YYYY"
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('fr-FR', options);

    return (
        <div>
            <div className="box-menu">
                <div>
                    <h2>&#128240; &bull; Bienvenue sur <u>TRACKING</u> !</h2>
                </div>
                <div className="help">
                    <p>
                        "<b><i class='bx bxs-bar-chart-square'></i> TRACKING</b>" est une plateforme dédiée à la gestion efficace du temps. Elle offre une interface 
                        permettant aux opérateurs de consigner facilement le temps consacré à chaque activité/sous-activité. 
                        Elle propose également une interface de contrôle, offrant ainsi une vision globale de 
                        l'efficacité opérationnelle.
                    </p>
                    <p>
                        Découvrez les outils de la plateforme :
                    
                        <ul>
                            <li>&bull; Un onglet de <b><u>recherche</u> &#128269;</b> permettant de rechercher un opérateur, une activité ou une sous-activité,</li>
                            <li>&bull; La liste des <b><u>anomalies</u> &#9888;&#65039;</b> de saisies de la journée (opérateurs n'ayant pas complété leur journée à ≤ 85%),</li>
                            <li>&bull; Le tableau des <b><u>absences</u> &#128123;</b>, permet de consulter la liste des opérateurs absents (et la durée de leur absence).</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="box-menu" id="solo-title">
                <div>
                    <h2>&#11015;&#65039; Indicateurs de performance &bull; <span>[{formattedDate}]</span> &#11015;&#65039;</h2>
                </div>
            </div>
            <div className="third-half">
                <div className="box-menu">
                    <span className="logo">&#128119;</span>
                    <h2><span>[xxx]</span> opérateurs</h2>
                </div>
                <div className="box-menu">
                    <span className="logo">&#9888;&#65039;</span>
                    <h2><span>[xxx]</span> anomalies</h2>
                </div>
                <div className="box-menu">
                    <span className="logo">&#128123;</span>
                    <h2><span>[xxx]</span> absents</h2>
                </div>
            </div>
        </div>
    );
}

export default InfosKPI;
