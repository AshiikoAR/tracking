import React from "react";

function Support() {
    return (
        <div className="support-box">
            <div className="box-menu">
                <div>
                    <h2>&#128735; &bull; Contacter le service support</h2>
                </div>
                <div className="help">
                    <h3>RAGUIN Alexandre | Alternant amélioration continue</h3>
                    <ul>
                        <li>&#x279c; &#128231; &bull; Par&nbsp;
                            <a href="mailto:a.raguin@daher.com?cc=r.delon@daher.com&subject=%5BTRACKING%5D%20-%20Demande%20de%20support">
                                 <b><u>mail</u></b> : a.raguin@daher.com
                            </a>
                        </li>
                        <li>&#x279c; &#128222; &bull; Par&nbsp;
                            <a href="tel:+33617518909">
                                <b><u>téléphone</u></b> : +33 6 17 51 89 09
                            </a>
                        </li>
                        <li>&#x279c; &#128241; &bull; Via&nbsp;
                            <a href="https://teams.microsoft.com/l/chat/0/0?users=a.raguin@daher.com">
                                 <b><u>Microsoft Teams</u></b> : Alexandre RAGUIN
                            </a>
                        </li>
                    </ul>
                    <h3>DELON Romain | Ingénieur amélioration continue</h3>
                    <ul>
                        <li>&#x279c; &#128231; &bull; Par&nbsp; 
                            <a href="mailto:r.delon@daher.com?cc=a.raguin@daher.com&subject=%5BTRACKING%5D%20-%20Demande%20de%20support">
                                <b><u>mail</u></b> : r.delon@daher.com
                            </a>
                        </li>
                        <li>&#x279c; &#128222; &bull; Par&nbsp;
                            <a href="tel:+33752641188">
                                <b><u>téléphone</u></b> : +33 7 52 64 11 88
                            </a>
                        </li>
                        <li>&#x279c; &#128241; &bull; Via&nbsp;
                            <a href="https://teams.microsoft.com/l/chat/0/0?users=r.delon@daher.com">
                                <b><u>Microsoft Teams</u></b> : Romain DELON
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box-menu">
                <div>
                    <h2>&#128194; &bull; Documents</h2>
                </div>
                <div className="documents">
                    <div className="docs">
                        <h3>Documentation technique</h3>
                        <ul>
                            <li>&#x279c; <b>&#129302; GitHub &bull;</b> <a href="/">Repository - Versionning Front</a></li>
                            <li>&#x279c; <b>&#129302; GitHub &bull;</b> <a href="/">Repository - Versionning Back</a></li>
                            <li>&#x279c; <b>&#128195; DOCX &bull;</b> <a href="/">Cahier des charges - Projet [TRACKING]</a></li>
                        </ul>
                    </div>
                    <div className="docs">
                        <h3>Aides client</h3>
                        <ul>
                            <li>&#x279c; <b>&#128252; PowerPoint &bull;</b> <a href="/"> "[TRACKING] - Daher Hub Ouest"</a></li>
                            <li>&#x279c; <b>&#128195; PDF &bull;</b> <a href="/">Guide d'utilisation</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;