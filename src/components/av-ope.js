import React from "react";

function Avancement() {
    return (
        <div>
            <div className="box-menu">
                <div>
                    <h2><span style={{color:"red", fontWeight:"bolder"}}>[AVCT]</span> &bull; Liste des sous-activités réalisées</h2>
                </div>
                <div className="loca-btn">
                    <input 
                        type="button" 
                        className="actu-list" 
                        value="&#128260;" 
                        title="Actualiser la liste des sous-activités réalisées." 
                        onClick={() => {}} 
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Activité</th>
                            <th scope="col">Sous-activité liée</th>
                            <th scope="col">Plage Horaire</th>
                            <th scope="col">Début</th>
                            <th scope="col">Fin</th>
                            <th scope="col">Avancement (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Picking</th>
                            <td>5e ligne Picking Pédestre</td>
                            <td>Normal standard</td>
                            <td>09:04</td>
                            <td>11:16</td>
                            <td>xx %</td>
                        </tr>
                        <tr>
                            <th scope="row">Picking</th>
                            <td>A320 AM Picking Pédestre</td>
                            <td>Normal standard</td>
                            <td>11:17</td>
                            <td>13:04</td>
                            <td>xx %</td>
                        </tr>
                        <tr>
                            <th scope="row">Gestion ordonnancement</th>
                            <td>Monitoring</td>
                            <td>Normal standard</td>
                            <td>14:07</td>
                            <td>16:02</td>
                            <td>xx %</td>
                        </tr>
                        <tr>
                            <th scope="row">Quais distribution</th>
                            <td>Layout</td>
                            <td>Normal standard</td>
                            <td>16:02</td>
                            <td>17:03</td>
                            <td>xx %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="box-menu">
                <div>
                    <h2><span style={{color:"red", fontWeight:"bolder"}}>[AVCT]</span> &bull; Avancement de la journée</h2>
                </div>
                <div className="progressbar-container" title="Bar de progression de l'avancement de la journée.">
                    <div className="progressbar-bar">xx %</div>
                </div>
                <div className="avancement">
                    <div className="av">
                        <h3>Avancement réalisé</h3>
                        <p>xx % de la journée.</p>
                    </div>
                    <div className="av">
                        <h3>Avancement restant</h3>
                        <p>xx % de la journée.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Avancement;