import React from "react";



function ListAct() {
    return (
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
    );
}

export default ListAct;
