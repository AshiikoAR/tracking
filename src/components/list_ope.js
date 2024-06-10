import React, { useState } from "react";

function ListOpe({ dataOpe }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedResponsable, setSelectedResponsable] = useState("");
    const [sortOption, setSortOption] = useState("1");
    const [selectedOpe, setSelectedOpe] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Function to format dates to "jj/mm/aaaa"
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Function to handle row click
    const handleRowClick = (item) => {
        setSelectedOpe(item);
        setIsEditing(true);
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedOpe({ ...selectedOpe, [name]: value });
    };

    // Function to handle save
    const handleSave = () => {
        // Here you would save the changes to the backend
        setIsEditing(false);
    };

    // Function to handle delete
    const handleDelete = () => {
        if (window.confirm("Voulez-vous vraiment supprimer cet opérateur ?")) {
            // Here you would delete the operator from the backend
            setSelectedOpe(null);
            setIsEditing(false);
        }
    };

    // Filter rows based on search term and selected responsable
    const filteredData = dataOpe.filter(item => 
        (selectedResponsable === "" || item.responsable === selectedResponsable) &&
        (
            item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.matricule.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.ng_sap && item.ng_sap.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.contrat && item.contrat.toLowerCase().includes(searchTerm.toLowerCase())) ||
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
                    <select id="filtre" name="filtre" value={selectedResponsable} onChange={(e) => setSelectedResponsable(e.target.value)}>
                        <option value="">Filtrer par responsable</option>
                        <option value="BONZANS.C">BONZANS Caroline</option>
                        <option value="DA COSTA.E">DA COSTA Elodie</option>
                        <option value="GASCOIN.L">GASCOIN Ludovic</option>
                        <option value="JAUNAIS.F">JAUNAIS Fabrice</option>
                        <option value="PELE.F">PELE Fabrice</option>
                        <option value="PHILIPPE.H">PHILIPPE Hélène</option>
                        <option value="RUSSON.D">RUSSON Delphine</option>
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
                    <select id="triListeOpe" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="1">Ordre alphabétique NOM (A-Z)</option>
                        <option value="2">Ordre alphabétique NOM (Z-A)</option>
                        <option value="3">Matricule croissant</option>
                        <option value="4">Matricule décroissant</option>
                    </select>
                </div>  
            </div>
            <div className="cadre-table-scroll">
                <table className="table-scroll">
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
                        {sortedData.length > 0 ? (
                            sortedData.map((item) => (
                                <tr key={item.id} onClick={() => handleRowClick(item)}>
                                    <td>{item.nom} {item.prenom}</td>
                                    <td>{item.matricule}</td>
                                    <td>{item.ng_sap || <span title="Pas de NG correspondant à ce matricule &bull; Contacter CE">&#10060;</span>}</td>
                                    <td>{item.contrat || <span title="Type de contrat inconnu &bull; Contacter CE">&#9888;&#65039;</span>}</td>
                                    <td>{formatDate(item.deb)}</td>
                                    <td>{formatDate(item.fin)}</td>
                                    <td>{item.h_th_hebdo}h</td>
                                    <td>{item.responsable}</td>
                                    <td>{item.id_activite_dft}</td>
                                    <td className="av-ope">
                                        <input type="range" value={item.avancement} disabled></input>
                                        <b>{item.avancement}%</b>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10">Opérateur introuvable.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {isEditing && selectedOpe && (
                <div className="edit-form">
                    <h3>Modifier Opérateur</h3>
                    <form>
                        <label>Nom:</label>
                        <input type="text" name="nom" value={selectedOpe.nom} onChange={handleInputChange} />
                        <label>Prénom:</label>
                        <input type="text" name="prenom" value={selectedOpe.prenom} onChange={handleInputChange} />
                        <label>Matricule:</label>
                        <input type="text" name="matricule" value={selectedOpe.matricule} onChange={handleInputChange} />
                        <label>NG SAP:</label>
                        <input type="text" name="ng_sap" value={selectedOpe.ng_sap} onChange={handleInputChange} />
                        <label>Contrat:</label>
                        <input type="text" name="contrat" value={selectedOpe.contrat} onChange={handleInputChange} />
                        <label>Début:</label>
                        <input type="date" name="deb" value={selectedOpe.deb} onChange={handleInputChange} />
                        <label>Fin:</label>
                        <input type="date" name="fin" value={selectedOpe.fin} onChange={handleInputChange} />
                        <label>Heures:</label>
                        <input type="text" name="h_th_hebdo" value={selectedOpe.h_th_hebdo} onChange={handleInputChange} />
                        <label>Responsable:</label>
                        <input type="text" name="responsable" value={selectedOpe.responsable} onChange={handleInputChange} />
                        <label>Activité par défaut:</label>
                        <input type="text" name="id_activite_dft" value={selectedOpe.id_activite_dft} onChange={handleInputChange} />
                        <div className="form-buttons">
                            <button type="button" onClick={handleSave}>Enregistrer</button>
                            <button type="button" onClick={() => setIsEditing(false)}>Annuler</button>
                            <button type="button" onClick={handleDelete}>Supprimer</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ListOpe;
