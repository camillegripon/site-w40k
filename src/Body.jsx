import '/src/style/body.css';
import { useEffect, useState, useCallback } from "react";

function Body({ faction }) {
    const [data, setData] = useState({ units: [] });
    //const [attributs, setAttributs] = useState({ keywords: [] })
    const [type, setType] = useState("");

    useEffect(() => {
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
                    console.error("Faction non trouvée");
                }
            })
            .catch(error => console.error("Erreur:", error));
    }, [faction]);

    const [army, setArmy] = useState([]);


    useEffect(() => {
        console.log(army);
    }, [army]);

    const supprimerUnit = (index) => {
        setArmy(ancienneArmee => ancienneArmee.filter((_, i) => i !== index));
    };

    const supprimerListe = () => {
        setArmy([]);
    }

    const creerArmee = (unit) => {
        setArmy(e => [...e, unit]);
        console.log(army, totalPoint);
    }

    const choisirType = (e) => {

        const changement = e.target.textContent;
        if (changement !== "Sans filtre") {
            setType(changement);
        } else {
            setType("")
        }
    }

    const totalPoint = army.reduce((sum, unit) => sum + (unit.points || 0), 0);
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
                    {data.units
                        .filter(unit => type === "" ? true : unit.keywords.includes(type))
                        .map(unit => (
                            <li key={unit.id} className="unit-item">
                                <img
                                    src={`/image/${faction}/${unit.logo}`}
                                    alt={unit.name}
                                    className="unit-logo"
                                />
                                <div className="unit-info">
                                    <h3>{unit.name}</h3>
                                    <p>{unit.points} pts <button onClick={() => creerArmee(unit)}>Ajouter à son armée</button></p>
                                    <div className="unit-keywords">
                                        {unit.keywords.map((keyword, index) => (
                                            <span key={index} className="keyword">
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
            <div className='listeArmeeChoisie'>
                <div className='tableArmeeChoisie'>
                    <div className='hautTableau'>
                        <div>Unités</div>
                        <div>Points</div>
                    </div>
                    {army.map((unit, index) => (
                        <div key={`${unit.id}-${index}`} className='armyUnit'>
                            {unit.figurines ? (
                                <div className='unitLigne'>
                                    <div className='unitName'>{unit.figurines} {unit.name}</div>
                                    <div className='unitPoints'>{unit.points}</div>
                                    <button className='supprimerUnit' onClick={() => supprimerUnit(index)}>-</button>
                                </div>
                            ) : (

                                <div className='unitLigne'>
                                    <div className='unitName'>{unit.name}</div>
                                    <div className='unitPoints'>{unit.points}</div>
                                    <button className='supprimerUnit' onClick={() => supprimerUnit(index)}>-</button>
                                </div>
                            )}
                        </div>

                    ))
                    }

                    <div className='ligneTotal'>
                        <div>Total</div>
                        <div>{totalPoint} points</div>
                    </div>

                </div>
            </div>
            <button className='reset' onClick={() => supprimerListe()}>Reset</button>
        </div >
    );
}

export default Body;