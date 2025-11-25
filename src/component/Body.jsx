import '/src/style/body.css';
import { useEffect, useState } from "react";

function Body({ allData, faction }) {
    //const [attributs, setAttributs] = useState({ keywords: [] })
    const [type, setType] = useState("");
    const [boutonImage, setBoutonImage] = useState(false);
    const [allDataAAfficher, setAllDataAAfficher] = useState(allData);

useEffect(()=>{
    console.log(allData);
}, [])

if(faction){
   // setAllDataAAfficher(allData.filter(faction));
}

    /*    useEffect(() => {
            fetch('/data/unit2.json')
                .then(response => response.json())
                .then(data => {
                    const factionData = data.factions.find(f => f.name === faction);
                    if (factionData) {
                        setData({ units: factionData.units });
                        console.log(factionData.units);
                        const listeAttributsSansSet = factionData.units.flatMap(unit => unit.keywords);
                        const listeAttributs = [...new Set(listeAttributsSansSet)];
                        //setAttributs({ keywords: listeAttributs })
                    } else {
                        console.log("Faction non selectionnée");
                    }
                })
                .catch(error => console.error("Erreur:", error));
        }, [faction]);
    */
    const [army, setArmy] = useState(() => {
        const savedArmy = localStorage.getItem('currentArmy');
        return savedArmy ? JSON.parse(savedArmy) : {};
    });



    useEffect(() => {
        console.log(army);
    }, [army]);

    const supprimerUnit = (factionName, index) => {
        setArmy(prevArmy => {
            const newArmy = { ...prevArmy };
            if (newArmy[factionName]) {
                newArmy[factionName].splice(index, 1);
                if (newArmy[factionName].length === 0) {
                    delete newArmy[factionName];
                }
            }
            localStorage.setItem('currentArmy', JSON.stringify(newArmy));
            return newArmy;
        });
    };





    const supprimerListe = () => {
        setArmy({});
        localStorage.setItem('currentArmy', JSON.stringify({}));
    };

    const creerArmee = (unit, factionName) => {
        setArmy(prevArmy => {
            const newArmy = { ...prevArmy };
            if (!newArmy[factionName]) {
                newArmy[factionName] = [];
            }
            newArmy[factionName].push(unit);
            localStorage.setItem('currentArmy', JSON.stringify(newArmy));
            return newArmy;
        });
    };






    const choisirType = (e) => {

        const changement = e.target.textContent;
        if (changement !== "Sans filtre") {
            setType(changement);
        } else {
            setType("")
        }
    }


    const afficherImage = (e) => {
        console.log(e.target);
        if (e.target.checked === false) {
            setBoutonImage(false);
        } else {
            setBoutonImage(true);
        }
    }

    const totalPoint = Object.values(army).reduce(
        (sum, units) => sum + units.reduce((unitSum, unit) => unitSum + unit.points, 0),
        0
    );


    const typeUnite = ["Infanterie", "Véhicule", "Personnage", "Sans filtre"];

    return (
        <div className='body'>

            <div className='listeArmeeDisponible'>
                <h2>Unités disponibles</h2>
                {/*             
                        PAS FORCEMENT ADAPTE FINALEMENT
                <ul>
                    {attributs.keywords.map((keywords, index) => (
                        <li key={index} className='unit-keywords'>
                            {keywords}
                        </li>
                    ))}
                </ul>
*/}

                <ul className='type-list-unit'>
                    {typeUnite.map(e => (
                        <li key={e} className='type-unit' onClick={choisirType}>{e}</li>
                    ))}
                </ul>
                <ul className="unit-list">
                    {allData.factions.map(faction =>
                        faction.units
                            .filter(unit => type === "" || unit.keywords.includes(type))
                            .map(unit => (
                                <li key={unit.id} className="unit-item">
                                    <img
                                        src={`/image/${faction.name}/${unit.logo}`}
                                        alt={unit.name}
                                        className="unit-logo"
                                    />
                                    <div className="unit-info">
                                        <h3>{unit.name}</h3>
                                        <p>
                                            {unit.points} pts
                                            <button onClick={() => creerArmee(unit, faction.name)}>
                                                Ajouter à son armée
                                            </button>

                                        </p>
                                        <div className="unit-keywords">
                                            {unit.keywords.map((keyword, index) => (
                                                <span key={index} className="keyword">{keyword}</span>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))
                    )}
                </ul>

            </div>
            <div className='listeArmeeChoisie'>
                <div className='tableArmeeChoisie'>
                    {/* En-tête du tableau */}
                    <div className='hautTableau'>
                        <div>Unités</div>
                        <div>Points</div>
                        <div>Actions</div>
                    </div>

                    {/* Liste des unités par faction */}
                    {Object.entries(army).map(([factionName, units]) =>
                        units.map((unit, index) => (
                            <div key={`${factionName}-${unit.id}`} className='unitLigne'>
                                {boutonImage && (
                                    <div className="unit-logo-container">
                                        <img src={`/image/${factionName}/${unit.logo}`} alt={unit.name} className="unit-logo" />
                                    </div>
                                )}
                                <div className='unitName'>{unit.name}</div>
                                <div className='unitPoints'>{unit.points}</div>
                                <button
                                    className='supprimerUnit'
                                    onClick={() => supprimerUnit(factionName, index)}
                                >
                                    -
                                </button>
                            </div>
                        ))
                    )}

                    {/* Ligne du total */}
                    <div className='ligneTotal'>
                        <div>Total</div>
                        <div>{totalPoint} points</div>
                        <div></div> {/* Cellule vide pour aligner avec la grid */}
                    </div>
                </div>
            </div>

            <div className='footerTableau'>
                <input type="checkbox" id='afficherImage' onClick={(e) => afficherImage(e)} /><label>Afficher image   </label>
                <button className='reset' onClick={() => supprimerListe()}>Reset</button>
            </div>
        </div >
    );
}

export default Body;