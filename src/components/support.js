import React from "react";

function Support() {
    return (
        <div className="half-box">
            <div className="box-menu">
                <div>
                    <h2>Contacter le service support</h2>
                </div>
                <div className="help">
                    <form>
                        <label htmlFor="filtre"><b>Objet &gt; </b></label>
                        <select id="filtre" name="filtre">
                            <option value="">-- Renseigner un motif --</option>
                            <option value="PB1">Problème rencontré lors du démarrage de l'application de TRACKING</option>
                            <option value="PB2">Problème rencontré lors de la connexion à l'outil de TRACKING</option>
                            <option value="PB3">Problème rencontré lors de l'enregistrement de la sous-activité à réaliser</option>
                            <option value="PB4">Problème rencontré lors de l'affichage de mon avancement</option>
                            <option value="PB5">Problème rencontré lors de l'affichage des activités en cours de réalisation par les autres opérateurs</option>
                            <option value="PB6">Erreur affichée par l'outil de TRACKING</option>
                            <option value="PB7">Autre motif (Remarque, pb différent, etc....)</option>
                        </select>
                        <input type="text" placeholder="Description du motif de contact : Remarque(s), Erreurs, pb rencontrés, etc..."></input>
                        <button className="choix" value="Débuter la sous-activité" onClick={() => {}}>Envoyer au service support</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Support;