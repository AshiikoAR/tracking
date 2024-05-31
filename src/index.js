import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA_OPE = [
  { id: "0", 
  matricule: "366216800333", 
  nom: "RAGUIN", 
  prenom: "Alexandre", 
  id_activite_dft: "Kardex", 
  contrat: "CDD", 
  deb: "22/11/2023", 
  fin: "06/09/2024", 
  ng_sap: null, 
  responsable:"DELON R.", 
  h_th_hebdo: 35,
  avancement: 93 },

  { id: "1", 
  matricule: "105220", 
  nom: "ALLAIN", 
  prenom: "Patrice", 
  id_activite_dft: "Réception / Rangement / Expéditions", 
  contrat: "CDI", 
  deb: "02/11/2020", 
  fin: "31/12/2199", 
  ng_sap: "NG8D270", 
  responsable:"BONZANS C.", 
  h_th_hebdo: 35,
  avancement: 70 },

  { id: "2", 
  matricule: "706612", 
  nom: "ANNEX", 
  prenom: "Lilian", 
  id_activite_dft: "Réception / Rangement / Expéditions", 
  contrat: "Intérimaire", 
  deb: "30/01/2023", 
  fin: "31/12/2199", 
  ng_sap: null, 
  responsable:"BONZANS C.", 
  h_th_hebdo: 35,
  avancement: 47 },

  { id: "3", 
  matricule: "8100517", 
  nom: "THEBAUD", 
  prenom: "Jérémy", 
  id_activite_dft: "Picking", 
  contrat: "Intérimaire", 
  deb: "01/11/2020", 
  fin: "30/12/2050", 
  ng_sap: "NG86B7A", 
  responsable:"PELE F.", 
  h_th_hebdo: 35,
  avancement: 84 } 
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataOpe={DATA_OPE} />
  </React.StrictMode>
);

reportWebVitals();