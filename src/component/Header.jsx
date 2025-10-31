import '/src/style/header.css';
import { useState } from 'react';

function Header({ onFactionSelect }) {

    return <>
        <h1 className="titre">WARHAMMER ARMY BUILDING</h1>
        <div className="listeLogo">
            <img src="/logo/logoVotann.png" alt="Ligues des Votanns" className="logo-faction" onClick={() => onFactionSelect("Votann")} />
            <img src="/logo/logoChaos.png" alt="Space marines du chaos" className="logo-faction" onClick={() => onFactionSelect("Marines Du Chaos")} />
            <img src="/logo/logoDeathwatch.png" alt="Deathwatch" className="logo-faction" onClick={() => onFactionSelect("Deathwatch")} />
            <img src="/logo/logoTau.png" alt="Tau" className="logo-faction" onClick={() => onFactionSelect("Tau")} />
        </div>
    </>

}

export default Header;