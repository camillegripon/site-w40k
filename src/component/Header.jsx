import '/src/style/header.css';
import { useState } from 'react';

function Header({ onFactionSelect }) {

    return <>
        <h1 className="titre">WARHAMMER ARMY BUILDING</h1>
        <div className="listeLogo">
            <img src="/image/logo/infini.png" alt="Toutes les factions" className="logo-faction" id="logoInfini" onClick={() => onFactionSelect("all")} />
            <img src="/image/logo/logoVotann.png" alt="Ligues des Votanns" className="logo-faction" onClick={() => onFactionSelect("Votann")} />
            <img src="/image/logo/logoChaos.png" alt="Space marines du chaos" className="logo-faction" id="logoChaos" onClick={() => onFactionSelect("Marines Du Chaos")} />
            <img src="/image/logo/logoDeathwatch.png" alt="Deathwatch" className="logo-faction" onClick={() => onFactionSelect("Deathwatch")} />
            <img src="/image/logo/logoTau.png" alt="Tau" className="logo-faction" onClick={() => onFactionSelect("T'au")} />
            <img src="/image/logo/logoSpaceMarines.png" alt="Space Marines" className="logo-faction" onClick={() => onFactionSelect("Space Marines")} />
            <img src="/image/logo/EmperorsChildren.png" alt="Emperor's Children" className="logo-faction" id="logoEmperorsChildren" onClick={() => onFactionSelect("Emperor's Children")} />
            <img src="/image/logo/logoTyranides.png" alt="Tyranides" className="logo-faction" id="Tyranides" onClick={() => onFactionSelect("Tyranides")} />
            <img src="/image/logo/logoAdeptusCustodes.png" alt="Adeptus Custodes" className="logo-faction" onClick={() => onFactionSelect("Adeptus Custodes")} />
        </div>
    </>

}

export default Header;