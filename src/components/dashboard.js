import React from "react";

function Dashboard() {
    return (
        <div className="home-section">
            {/* Nom de page */}
            <div className="home-content">
                <i className='bx bx-menu' ></i>
                <span className="text" title="Tableau de bord"><i className='bx bxs-home-smile' ></i> &bull; Accueil</span>
            </div>
            {/* Bloc contenant le pop-up de présentation */}
            <div className="box" id="accueil-popup">
                <div className="cardText">
                    <div className="cardHeader">
                        <h2><span style={{color:"red", fontWeight:"bolder"}}>[ACTI]</span> &bull; Choix d'une activité *</h2>
                    </div>
                    <br/>
                    <fieldset>
                        <legend>&ensp;<b>Plage horaire</b>&ensp;</legend>
                        <div>
                            <label htmlFor="filtre">
                                <select id="filtre" name="filtre" style={{width: "100%", marginBottom: "5px"}}>
                                    <option value="none">--</option>
                                    <option value="">Quart matin</option>
                                    <option value="">Journée normale</option>
                                    <option value="">Quart soir</option>
                                    <option value="">Nuit</option>
                                    <option value="">Formation</option>
                                </select>
                            </label>
                            <br/>
                            <p><b>Plage horaire sélectionnée &bull;</b> <span style={{color: "red"}}>[ Choisir une plage ]</span></p> 
                        </div>
                    </fieldset>
                    <br/>
                    <fieldset>
                        <legend>&ensp;<b>Activité</b>&ensp;</legend>
                        <div>
                            <label htmlFor="filtre">
                                <select id="filtre" name="filtre" style={{width: "100%", marginBottom: "5px"}}>
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
                            <br/>
                            <p><b>Activité sélectionnée &bull;</b> <span style={{color: "red"}}>[ Choisir une plage ]</span></p> 
                        </div>
                    </fieldset>
                    <br/>
                    <fieldset>
                        <legend>&ensp;<b>Sous-activité</b>&ensp;</legend>
                        <div>
                            <label htmlFor="filtre">
                                <select id="filtre" name="filtre" style={{width: "100%", marginBottom: "5px"}}>
                                    <option value="none">--</option>
                                </select>
                            </label>
                            <br/>
                            <p><b>Sous-activité sélectionnée &bull;</b> <span style={{color: "red"}}>[ Choisir une plage ]</span></p> 
                        </div>
                    </fieldset>
                    <br/>
                    <div style={{textAlign: "center"}}>
                        <input type="button" value="Débuter la sous-activité" onClick={() => {}} />
                    </div>
                    <div style={{textAlign: "end"}}>
                        <p style={{fontSize: "smaller"}}>* Saisir les informations via liste déroulante ou scanner de code-barre</p>
                    </div>
                </div>
            </div>
            <br/>
            <div className="box" id="footer">
                <div className="cardText" style={{textAlign: "center"}}>
                    <p><a href="#" className="txtLink"><i className='bx bxs-bar-chart-square' title="TRACKING &bull; DAHER Hub Ouest"></i> <b>TRACKING</b></a> &bull; 2023 - 2024, Tous droits réservés. Ce site est affilié à <a href="https://www.daher.com/" className="txtLink">DAHER Hub Ouest <b>&copy;</b></a></p>
                    <p><b><a href="support.html" className="txtLink">Support</a> &bull; <a href="https://bit.ly/3f9Zk8d" className="txtLink">Politique de confidentialité</a></b></p>
                    <a href="https://www.daher.com/"><img src="img/logotypes/daher.png" alt="Logo DAHER SA" className="daher"/></a>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;