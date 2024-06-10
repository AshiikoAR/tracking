import React, { useState } from "react";

function ListAct({ dataActi }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedActivite, setselectedActivite] = useState("");
    const [sortOption, setSortOption] = useState("1");

    // Filter rows based on search term and selected responsable
    const filteredData = dataActi.filter(item => 
        (selectedActivite === "" || item.activite === selectedActivite) &&
        (
            item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.num_bt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.activite.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.ss_activite.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.ind_charge.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort filtered data based on selected option
    const sortedData = filteredData.sort((a, b) => {
        switch (sortOption) {
            case "1": return a.id.localeCompare(b.id);
            case "2": return b.id.localeCompare(a.id);
            case "3": return a.ss_activite.localeCompare(b.ss_activite);
            case "4": return a.activite.localeCompare(b.activite);
            case "5": return a.type.localeCompare(b.type);
            default: return 0;
        }
    });

    return (
        <div className="box-menu">
            <div className="inputs-rech-ope">
                <div>
                    <select id="filtre" name="filtre" value={selectedActivite} onChange={(e) => setselectedActivite(e.target.value)}>
                        <option value="">Filtrer par activité</option>
                        <option value="Réception / Rangement / Expéditions">Réception / Rangement / Expé.</option>
                        <option value="Picking">Picking</option>
                        <option value="Consolidation">Consolidation</option>
                        <option value="Kardex">Kardex</option>
                        <option value="Gestion ordonnancement">Gestion Ordonnancement</option>
                        <option value="Tamaris">Tamaris</option>
                        <option value="Quais Distribution">Quais Distribution</option>
                    </select>
                </div>
                <div>
                    <input type="button" value="&#128221; Ajouter une sous-activité" onClick={() => {}} />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="&#128270; Rechercher une sous-activité" 
                        id="recherche-double"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <select id="triListeOpe" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="1">ID croissant</option>
                        <option value="2">ID décroissant</option>
                        <option value="3">Ordre alphabétique NOM (A-Z)</option>
                        <option value="4">Ordre alphabétique Activité (A-Z)</option>
                        <option value="5">Ordre alphabétique Type (A-Z)</option>
                    </select>
                </div>  
            </div>
            <div className="cadre-table-scroll">
                <table className="table-scroll">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Numéro BT</th>
                            <th>Activité</th>
                            <th>Sous-activité liée</th>
                            <th>Type</th>
                            <th>Indicateur de charge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.length > 0 ? (
                            sortedData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.num_bt || <span title="Cette activité n'a pas de Numéro BT &bull; Contacter CE">&#9888;&#65039;</span>}</td>
                                    <td>{item.activite}</td>
                                    <td>{item.ss_activite}</td>
                                    <td>{item.type}</td>
                                    <td>{item.ind_charge || <span title="Pas d'indicateur de chage pour cette sous-activité">&#10060;</span>}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Sous-activité introuvable.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListAct;
