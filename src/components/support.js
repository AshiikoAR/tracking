import React from "react";

function Support() {
    return (
        <div className="box-menu">
            <div>
                <h2><span style={{color:"red", fontWeight:"bolder"}}>[ACTI]</span> &bull; Choix d'une activité *</h2>
            </div>
            <fieldset>
                <legend>&ensp;<b>Plage horaire</b>&ensp;</legend>
                <div>
                    <label htmlFor="filtre">
                        <b>Plage horaire sélectionnée &bull;</b>
                        <select id="filtre" name="filtre">
                            <option value="none">--</option>
                            <option value="">Quart matin</option>
                            <option value="">Journée normale</option>
                            <option value="">Quart soir</option>
                            <option value="">Nuit</option>
                            <option value="">Formation</option>
                        </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>&ensp;<b>Activité</b>&ensp;</legend>
                <div>
                    <label htmlFor="filtre">
                        <b>Activité sélectionnée &bull;</b>
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
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>&ensp;<b>Sous-activité</b>&ensp;</legend>
                <div>
                    <label htmlFor="filtre">
                        <b>Sous-activité sélectionnée &bull;</b>
                        <select id="filtre" name="filtre">
                            <option value="none">--</option>
                        </select>
                    </label>
                </div>
            </fieldset>
            <div>
                <input type="button" value="&#128190; Débuter la sous-activité" onClick={() => {}} />
                <p>&#128161; * Saisir les informations via liste déroulante ou scanner de code-barre</p>
            </div>
        </div>
    );
}

export default Support;