import React from "react";

function ChoixAct() {
    return (
        <div className="half-box">
            <div className="box-menu">
                <div>
                    <h2>&#128679; &bull; Choix d'une activité *</h2>
                </div>
                <form>
                    <div>
                        <label htmlFor="filtre"><b>&#128339; &bull; Plage horaire</b></label>
                        <select id="filtre" name="filtre">
                            <option value="none">--</option>
                            <option value="">Quart matin</option>
                            <option value="">Journée normale</option>
                            <option value="">Quart soir</option>
                            <option value="">Nuit</option>
                            <option value="">Formation</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="filtre"><b>&#128736;&#65039; &bull; Activité</b></label>
                        <select id="filtre" name="filtre">
                            <option value="none">--</option>
                            <option value="">Réception / Rangement / Expéditions</option>
                            <option value="">Picking</option>
                            <option value="">Consolidation</option>
                            <option value="">Kardex</option>
                            <option value="">Gestion ordonnancement</option>
                            <option value="">Tamaris</option>
                            <option value="">Quais distribution</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="filtre"><b>&#9881;&#65039; &bull; Sous-activité</b></label>
                        <select id="filtre" name="filtre">
                            <option value="none">--</option>
                        </select>
                    </div>
                    <div className="choix">
                        <input type="button" value="&#128190; Débuter la sous-activité" onClick={() => {}} />
                        <p>&#128161; * Saisir les informations via liste déroulante ou scanner de code-barre</p>
                    </div>
                </form>
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

export default ChoixAct;