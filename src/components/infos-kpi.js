import React from "react";

function InfosKPI() {
    return (
        <div className="half-box">
            <div className="box-menu">
                <div>
                    <h2>&#128240; &bull; Bienvenue sur <u>TRACKING</u> !</h2>
                </div>
                <div className="help">
                    <p>
                        "TRACKING" est une plateforme dédiée à la gestion efficace du temps. Elle offre une interface 
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
            <div className="box-menu">
                <div>
                    <h2>&#128119; &bull; Opérateur / Activité en cours</h2>
                </div>
                <div className="loca-btn">
                    <input 
                        type="button" 
                        className="actu-list" 
                        value="&#128260;" 
                        title="Actualiser la liste des activités en cours de réalisation." 
                        onClick={() => {}} 
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Nom &bull; Prénom</th>
                            <th scope="col">Activité &bull; Sous-activité</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">TEST Test 1</th>
                            <td>Picking &bull; 5e ligne Picking Pédestre</td>
                        </tr>
                        <tr>
                            <th scope="row">TEST Test 2</th>
                            <td>Picking &bull; A320 AM Picking Pédestre</td>
                        </tr>
                        <tr>
                            <th scope="row">TEST Test 3</th>
                            <td>Gestion ordonnancement &bull; Monitoring</td>
                        </tr>
                        <tr>
                            <th scope="row">TEST Test 4</th>
                            <td>Quais distribution &bull; Layout</td>
                        </tr>
                        <tr>
                            <th scope="row">TEST Test 5</th>
                            <td>Quais distribution &bull; Layout</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InfosKPI;