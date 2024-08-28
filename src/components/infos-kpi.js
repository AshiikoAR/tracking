import React from "react";

function InfosKPI({ dataOpe }) {
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('fr-FR', options);

    const numOperators = dataOpe.length;
    const numAnomalies = dataOpe.filter(item => item.avancement < 80).length;

    return (
        <div>
            <div className="box-menu">
                <div>
                    <h2>Bienvenue sur <u>TRACKING</u> !</h2>
                </div>
                <div className="help">
                    <p>
                        "<b>TRACKING</b>" est une plateforme dédiée à la gestion efficace du temps. Elle offre une interface 
                        permettant aux opérateurs de consigner facilement le temps consacré à chaque activité/sous-activité. 
                        Elle propose également une interface de contrôle, offrant ainsi une vision globale de 
                        l'efficacité opérationnelle.
                    </p>
                    <p>
                        Découvrez les outils de la plateforme :
                    
                        <ul>
                            <li>Un onglet de <b><u>recherche</u></b> permettant de rechercher un opérateur, une activité ou une sous-activité,</li>
                            <li>La liste des <b><u>anomalies</u></b> de saisies de la journée (opérateurs n'ayant pas complété leur journée à ≤ 85%),</li>
                            <li>Le tableau des <b><u>absences</u></b>, permet de consulter la liste des opérateurs absents (et la durée de leur absence).</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="box-menu" id="solo-title">
                <div>
                    <h2>Indicateurs de performance &bull; <span>[{formattedDate}]</span> &#11015;&#65039;</h2>
                </div>
            </div>
            <div className="third-half">
                <div className="box-menu">
                    <h2><span>[{numOperators}]</span> opérateurs</h2>
                </div>
                <div className="box-menu">
                    <h2><span>[{numAnomalies}]</span> anomalies</h2>
                </div>
                <div className="box-menu">
                    <h2><span>[xxx]</span> absents</h2>
                </div>
            </div>
        </div>
    );
}

export default InfosKPI;
