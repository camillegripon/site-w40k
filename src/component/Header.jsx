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
            <img src="/image/logo/logoTyranides.png" alt="Tyranides" className="logo-faction" id="logoTyranides" onClick={() => onFactionSelect("Tyranides")} />
            <img src="/image/logo/logoAdeptusCustodes.png" alt="Adeptus Custodes" className="logo-faction" onClick={() => onFactionSelect("Adeptus Custodes")} />
            <img src="/image/logo/logoAdeptaSororitas.png" alt="Adepta Sororitas" className="logo-faction" id='logoAdeptaSororitas' onClick={() => onFactionSelect("Adepta Sororitas")} />
            <img src="/image/logo/logoAdeptusMechanicus.png" alt="Adeptus Mechanicus" className="logo-faction" id='logoAdeptusMechanicus' onClick={() => onFactionSelect("Adeptus Mechanicus")} />
            <img src="/image/logo/logoAeldari.png" alt="Aeldari" className="logo-faction" id='logoAeldari' onClick={() => onFactionSelect("Aeldari")} />
            <img src="/image/logo/logoAgentImperium.png" alt="Agent de l'Imperium" className="logo-faction" id='logoAgentImperium' onClick={() => onFactionSelect("Agent de l'Imperium")} />
            <img src="/image/logo/logoAstraMilitarum.png" alt="Astra Militarum" className="logo-faction" id='logoAstraMilitarum' onClick={() => onFactionSelect("Astra Militarum")} />
            <img src="/image/logo/logoBlackTemplars.png" alt="Black Templars" className="logo-faction" id='logoBlackTemplars' onClick={() => onFactionSelect("Black Templars")} />
            <img src="/image/logo/logoBloodAngels.png" alt="Blood Angels" className="logo-faction" id='logoBloodAngels' onClick={() => onFactionSelect("Blood Angels")} />
            <img src="/image/logo/logoDemonduChaos.png" alt="Démons du Chaos" className="logo-faction" id='logoDemonduChaos' onClick={() => onFactionSelect("Démons du Chaos")} />
            <img src="/image/logo/logoChevaliersduChaos.png" alt="Chevaliers du Chaos" className="logo-faction" id='logoChevaliersduChaos' onClick={() => onFactionSelect("Chevaliers du Chaos")} />
            <img src="/image/logo/logoDarkAngels.png" alt="Dark Angels" className="logo-faction" id='logoDarkAngels' onClick={() => onFactionSelect("Dark Angels")} />
            <img src="/image/logo/logoDeathGuard.png" alt="Death Guard" className="logo-faction" id='logoDeathGuard' onClick={() => onFactionSelect("Death Guard")} />
            <img src="/image/logo/logoDrukhari.png" alt="Drukhari" className="logo-faction" id='logoDrukhari' onClick={() => onFactionSelect("Drukhari")} />
            <img src="/image/logo/logoCultesGenestealers.png" alt="Cultes Genestealers" className="logo-faction" id='logoCultesGenestealers' onClick={() => onFactionSelect("Cultes Genestealers")} />
            <img src="/image/logo/logoChevaliersGris.png" alt="Chevaliers Gris" className="logo-faction" id='logoChevalierGris' onClick={() => onFactionSelect("Chevaliers Gris")} />
            <img src="/image/logo/logoChevaliersImperiaux.png" alt="Chevaliers Impériaux" className="logo-faction" id='logoChevaliersImperiaux' onClick={() => onFactionSelect("Chevaliers Impériaux")} />
            <img src="/image/logo/logoNecrons.png" alt="Nécrons" className="logo-faction" id='logoNecrons' onClick={() => onFactionSelect("Nécrons")} />
            <img src="/image/logo/logoOrks.png" alt="Orks" className="logo-faction" id='logoOrks' onClick={() => onFactionSelect("Orks")} />
            <img src="/image/logo/logoSpaceWolves.png" alt="Space Wolves" className="logo-faction" id='logoSpaceWolves' onClick={() => onFactionSelect("Space Wolves")} />
            <img src="/image/logo/logoThousandSons.png" alt="Thousand Sons" className="logo-faction" id='logoThousandSons' onClick={() => onFactionSelect("Thousand Sons")} />
            <img src="/image/logo/logoWorldEaters.png" alt="World Eaters" className="logo-faction" id='logoWorldEaters' onClick={() => onFactionSelect("World Eaters")} />
        </div>
    </>

}

export default Header;