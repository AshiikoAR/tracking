import React, { useState } from "react";
import DashboardCtrl from "./dashboard-ctrl";
import DashboardOpe from "./dashboard-ope";

function Conn({ dataOpe, dataActi }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [inputType, setInputType] = useState("password");
  const [buttonType, setButtonType] = useState("Voir");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = dataOpe.find((user) => user.matricule === inputValue || user.ng_sap === inputValue);
    if (user) {
      setInputValue("");
      setCurrentUser(user);
      setShowDashboard(true);
    } else {
      setErrorMessage("Matricule ou NG SAP invalide.");
    }
  };

  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
    setButtonType(buttonType === "Voir" ? "Cacher" : "Voir");
  };

  if (showDashboard) {
    return <DashboardOpe user={currentUser} dataOpe={dataOpe} dataActi={dataActi} />;
  }

  return (
    <div className="App">
      <div className="Form-conn">
        <h1>[TRACKING]</h1>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            className="Mdp-conn"
            id="pin"
            type={inputType}
            minLength="1"
            maxLength="12"
            placeholder="Matricule ou NG SAP"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleInputType}>{buttonType}</button>
          <button type="submit">Connexion</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Conn;