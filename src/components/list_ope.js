import React, { useState } from "react";

function ListOpe({ dataOpe }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedResponsable, setSelectedResponsable] = useState("");
    const [sortOption, setSortOption] = useState("1");

    // Filter rows based on search term and selected responsable
    const filteredData = dataOpe.filter(item => 
        (selectedResponsable === "" || item.responsable === selectedResponsable) &&
        (
            item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.matricule.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.ng_sap && item.ng_sap.toLowerCase().includes(searchTerm.toLowerCase())) ||
            item.contrat.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.deb.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.fin.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.responsable.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id_activite_dft.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort filtered data based on selected option
    const sortedData = filteredData.sort((a, b) => {
        switch (sortOption) {
            case "1": return a.nom.localeCompare(b.nom);
            case "2": return b.nom.localeCompare(a.nom);
            case "3": return a.matricule.localeCompare(b.matricule);
            case "4": return b.matricule.localeCompare(a.matricule);
            default: return 0;
        }
    });

    return (
        <div className="box-menu">
            <div className="inputs-rech-ope">
                <div>
                    <select 
                        id="filtre" 
                        name="filtre" 
                        value={selectedResponsable} 
                        onChange={(e) => setSelectedResponsable(e.target.value)}
                    >
                        <option value="">Filtrer par responsable</option>
                        <option value="AUFFRAIS F.">AUFFRAIS Florent</option>
                        <option value="BONZANS C.">BONZANS Caroline</option>
                        <option value="CRIADO J.">CRIADO Julien</option>
                        <option value="DA COSTA E.">DA COSTA Elodie</option>
                        <option value="DELON R.">DELON Romain</option>
                        <option value="DOUMAYRENC E.">DOUMAYRENC Elodie</option>
                        <option value="FRANCAVILLA A.">FRANCAVILLA Anne</option>
                        <option value="GASCOIN L.">GASCOIN Ludovic</option>
                        <option value="HUCHET N.">HUCHET Nicolas</option>
                        <option value="JAUNAIS F.">JAUNAIS Fabrice</option>
                        <option value="PELE F.">PELE Fabrice</option>
                        <option value="PHILIPPE H.">PHILIPPE Hélène</option>
                        <option value="RIOUS S.">RIOUS Sébastien</option>
                        <option value="TEST">TEST LISTE</option>
                    </select>
                </div>
                <div>
                    <input type="button" value="&#128119; Ajouter un opérateur" onClick={() => {}} />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="&#128270; Rechercher un effectif" 
                        id="recherche-double"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <select 
                        id="triListeOpe" 
                        value={sortOption} 
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="1">Ordre alphabétique NOM (A-Z)</option>
                        <option value="2">Ordre alphabétique NOM (Z-A)</option>
                        <option value="3">Matricule croissant</option>
                        <option value="4">Matricule décroissant</option>
                    </select>
                </div>  
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nom &bull; Prénom</th>
                        <th>Matricule</th>
                        <th>NG SAP</th>
                        <th>Contrat</th>
                        <th>Début</th>
                        <th>Fin</th>
                        <th>Heures</th>
                        <th>Responsable</th>
                        <th>Activité par défaut</th>
                        <th>Avancement (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nom} {item.prenom}</td>
                            <td>{item.matricule}</td>
                            <td>{item.ng_sap || "N/A"}</td>
                            <td>{item.contrat}</td>
                            <td>{item.deb}</td>
                            <td>{item.fin}</td>
                            <td>{item.h_th_hebdo}h</td>
                            <td>{item.responsable}</td>
                            <td>{item.id_activite_dft}</td>
                            <td><input type="range" value={item.avancement} disabled></input><b>{item.avancement}%</b></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListOpe;
