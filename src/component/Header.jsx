import '/src/style/header.css';
import { useState } from 'react';

function Header({ onFactionSelect }) {

    return <>
        <h1 className="titre">WARHAMMER ARMY BUILDING</h1>
        <div className="listeLogo">
            <img src="/image/logo/logoVotann.png" alt="Ligues des Votanns" className="logo-faction" onClick={() => onFactionSelect("Votann")} />
            <img src="/image/logo/logoChaos.png" alt="Space marines du chaos" className="logo-faction" onClick={() => onFactionSelect("Marines Du Chaos")} />
            <img src="/image/logo/logoDeathwatch.png" alt="Deathwatch" className="logo-faction" onClick={() => onFactionSelect("Deathwatch")} />
            <img src="/image/logo/logoTau.png" alt="Tau" className="logo-faction" onClick={() => onFactionSelect("T'au")} />
            <img src="/image/logo/logoSpaceMarines.png" alt="Space Marines" className="logo-faction" onClick={() => onFactionSelect("Space Marines")} />
        </div>
    </>

}

export default Header;