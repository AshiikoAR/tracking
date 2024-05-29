import React from "react";

function Support() {
    return (
        <div>
            <div className="box-menu">
                <div>
                    <h2><span style={{color:"red", fontWeight:"bolder"}}>[HELP]</span> &bull; Contacter le service support</h2>
                </div>
                <div className="help">
                    <h3>RAGUIN Alexandre | Développeur - Alternant amélioration continue</h3>
                    <ul>
                        <li>&#128231; &bull; Par&nbsp;
                            <a href="mailto:a.raguin@daher.com?cc=r.delon@daher.com&subject=%5BTRACKING%5D%20-%20Demande%20de%20support">
                                 <b><u>mail</u></b> : a.raguin@daher.com
                            </a>
                        </li>
                        <li>&#128222; &bull; Par&nbsp;
                            <a href="tel:+33617518909">
                                <b><u>téléphone</u></b> : +33 6 17 51 89 09
                            </a>
                        </li>
                        <li>&#128241; &bull; Via&nbsp;
                            <a href="https://teams.microsoft.com/l/chat/0/0?users=a.raguin@daher.com">
                                 <b><u>Microsoft Teams</u></b> : Alexandre RAGUIN
                            </a>
                        </li>
                    </ul>
                    <h3>DELON Romain | Développeur - Ingénieur amélioration continue</h3>
                    <ul>
                        <li>&#128231; &bull; Par&nbsp; 
                            <a href="mailto:r.delon@daher.com?cc=a.raguin@daher.com&subject=%5BTRACKING%5D%20-%20Demande%20de%20support">
                                <b><u>mail</u></b> : r.delon@daher.com
                            </a>
                        </li>
                        <li>&#128222; &bull; Par&nbsp;
                            <a href="tel:+33752641188">
                                <b><u>téléphone</u></b> : +33 7 52 64 11 88
                            </a>
                        </li>
                        <li>&#128241; &bull; Via&nbsp;
                            <a href="https://teams.microsoft.com/l/chat/0/0?users=r.delon@daher.com">
                                <b><u>Microsoft Teams</u></b> : Romain DELON
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box-menu">
                <div>
                    <h2><span style={{color:"red", fontWeight:"bolder"}}>[DOCS]</span> &bull; Documents</h2>
                </div>
                <div className="documents">
                    <div className="docs">
                        <h3>Documentation technique</h3>
                        <ul>
                            <li>&bull;&nbsp;
                                <a href="/">
                                    Repository - Versionning Front &bull; GitHub
                                </a>
                            </li>
                            <li>&#128222; &bull; Par&nbsp;
                                <a href="tel:+33617518909">
                                     Téléphone : +33 6 17 51 89 09
                                </a>
                            </li>
                            <li>&#128241; &bull; Via&nbsp;
                                <a href="https://teams.microsoft.com/l/chat/0/0?users=a.raguin@daher.com">
                                     Microsoft Teams : Alexandre RAGUIN
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="docs">
                    <h3>Aides client</h3>
                        <ul>
                            <li>&#128238; &bull; Par&nbsp;
                                <a href="mailto:r.delon@daher.com?cc=a.raguin@daher.com&subject=%5BTRACKING%5D%20-%20Demande%20de%20support">
                                     mail : r.delon@daher.com
                                </a>
                            </li>
                            <li>&#128222; &bull; Par&nbsp;
                                <a href="tel:+33752641188">
                                     téléphone : +33 7 52 64 11 88
                                </a>
                            </li>
                            <li>&#128241; &bull; Via&nbsp;
                                <a href="https://teams.microsoft.com/l/chat/0/0?users=r.delon@daher.com">
                                     Microsoft Teams : Romain DELON
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;