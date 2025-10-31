import '/src/style/header.css';
import { useState } from 'react';

function Header ({onFactionSelect}) {

    return <>
<h1 className="titre">WARHAMMER ARMY BUILDING</h1>
            <p>Choisissez votre armée</p>
            <div className="listeLogo">
                <img src="/logo/logoVotann.png" alt="Ligues des Votanns" className="logo-faction" onClick={() =>onFactionSelect("Votann")}/>
                <img src="/logo/logoChaos.png" alt="Space marines du chaos" className="logo-faction" onClick={() => onFactionSelect("Marines Du Chaos")}/>
            </div>
</>

}

export default Header;