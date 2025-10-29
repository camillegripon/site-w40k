import '/src/style/body.css';
import { useEffect, useState, useCallback } from "react";

function Body() {
    const [data, setData] = useState({ units: [] });

    useEffect(() => {
        fetch('/data/unit.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log("Données chargées:", data);
            })
            .catch(error => console.error("Erreur:", error.message));
    }, []);

    const [army, setArmy] = useState([]);

    useEffect(() => {
        console.log(army);
    }, [army]);



    const creerArmee = (unit) => {
        setArmy(e => [...e, unit]);
    }

    const totalPoint = army.reduce((sum, unit) => sum + unit.points, 0);


    return (
        <div className='body'>
            <h1 className="titre">Site Warhammer</h1>
            <p>Choisissez votre armée</p>
            <img src="/logo/logoVotann.png" alt="Ligues des Votanns" className="logo-faction" />

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
                <table className='tableArmeeChoisie'>
                    <thead>
                        <tr>
                            <td>Unité</td>
                            <td>Points</td>
                        </tr>
                    </thead>
                    <tbody>
                        {army.map((unit, index) => (
                            <tr key={`${unit.id}-${index}`}>
                                {unit.figurines ? (  
                                    <>
                                        <td>{unit.figurines} {unit.name}</td>
                                        <td>{unit.points}</td>
                                    </>
                                ) : (
                                    <>
                                        <td>{unit.name}</td> 
                                        <td>{unit.points}</td>
                                    </>
                                )}
                            </tr>
                        ))
                        }

                        <tr>
                            <td>Total</td>
                            <td>{totalPoint} points</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Body;