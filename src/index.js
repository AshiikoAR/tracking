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
    ng_sap: null },
  
  { id: "1",
    matricule: "105220",
    nom: "ALLAIN",
    prenom: "Patrice",
    ng_sap: "NG8D270" },

  { id: "2",
    matricule: "706612",
    nom: "ANNEX",
    prenom: "Lilian",
    ng_sap: null },
  
  { id: "3",
    matricule: "8100517",
    nom: "THEBAUD",
    prenom: "Jérémy",
    ng_sap: "NG86B7A" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataOpe={DATA_OPE} />
  </React.StrictMode>
);

reportWebVitals();