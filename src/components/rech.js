// rech.js
import React, { useState } from "react";
import ListOpe from "./list_ope";
import ListAct from "./list_act";

function Recherche({dataOpe, dataActi}) {
    // Use state to keep track of which list to show
    const [showList, setShowList] = useState('ope');

    return (
        <div>
            <div className="type_rech">
                <button onClick={() => setShowList('ope')} className={showList === 'ope' ? 'active' : ''}>
                    Liste des opérateurs
                </button>
                <button onClick={() => setShowList('act')} className={showList === 'act' ? 'active' : ''}>
                    Listes des activités
                </button>
            </div>
            {showList === 'ope' && <ListOpe dataOpe={dataOpe} />}
            {showList === 'act' && <ListAct dataActi={dataActi} />}
        </div>
    );
}

export default Recherche;
