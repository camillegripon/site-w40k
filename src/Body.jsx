import '/src/style/body.css';
import { useEffect, useState, useCallback } from "react";

function Body({faction}) {
    const [data, setData] = useState({ units: [] });

useEffect(() => {
  fetch('/data/unit.json')
    .then(response => response.json())
    .then(data => {
      const factionData = data.factions.find(f => f.name === faction);
      if (factionData) {
        setData({ units: factionData.units });
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


    const creerArmee = (unit) => {
        setArmy(e => [...e, unit]);
    }

    const totalPoint = army.reduce((sum, unit) => sum + unit.points, 0);


    return (
        <div className='body'>



            <div className='listeArmeeDisponible'>
                <h2>Unités disponibles</h2>
                <ul className="unit-list">
                    {data.units.map(unit => (
                        <li key={unit.id} className="unit-item">
                            <img
                                src={`/logo/${unit.logo}`}
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
        </div>
    );
}

export default Body;