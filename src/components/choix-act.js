import React from "react";

function ChoixAct() {
    return (
        <div className="half-box">
            <div className="box-menu">
                <div>
                    <h2>Choix d'une activité *</h2>
                </div>
                <form>
                    <div>
                        <label htmlFor="filtre"><b>Plage horaire &gt; </b></label>
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
                        <label htmlFor="filtre"><b>Activité &gt; </b></label>
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
                        <label htmlFor="filtre"><b>Sous-activité &gt; </b></label>
                        <select id="filtre" name="filtre">
                            <option value="none">--</option>
                        </select>
                    </div>
                    <input type="button" className="choix" value="Débuter la sous-activité" onClick={() => {}} />
                    <label className="txt">* Saisir les informations via liste déroulante ou scanner de code-barre</label>
                </form>
            </div>
        </div>
    );
}

export default ChoixAct;