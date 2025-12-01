import '/src/style/body.css';
import { useEffect, useState, useRef } from "react";

function Body({ allData, faction }) {

    const typeUnite = ["Infanterie", "Véhicule", "Personnage", "Monstre", "Vol", "Sans filtre"];
    //const [attributs, setAttributs] = useState({ keywords: [] })
    const [type, setType] = useState("");
    const [boutonImage, setBoutonImage] = useState(false);
    const [allDataAAfficher, setAllDataAAfficher] = useState(allData);
    const divListUnitRef = useRef(null);

const slideOut = (callback) => {
  if (!divListUnitRef.current) return;
  const divListUnit = divListUnitRef.current;
  divListUnit.classList.add("slide-out");
  divListUnit.addEventListener("transitionend", () => {
    divListUnit.classList.remove("slide-out");
    callback(); 
    setTimeout(()=>{
    slideIn();
}, 10);  
  }, { once: true });
};

const slideIn = () => {
  if (!divListUnitRef.current) return;
  const divListUnit = divListUnitRef.current;
  void divListUnit.offsetWidth; 
  divListUnit.classList.add("slide-in");
  divListUnit.addEventListener("transitionend", () => {
    divListUnit.classList.remove("slide-in");
  }, { once: true });
};


useEffect(() => {
  slideOut(() => {
    let newData;
    if (faction && faction !== "all") {
      newData = { factions: allData.factions.filter(e => e.name === faction) };
      setAllDataAAfficher(newData); 
    } else if (faction === "all") {
      setTimeout(() => {
        newData = allData;
        setAllDataAAfficher(newData);
      }, 150);
    } else {
      newData = allData;
      setAllDataAAfficher(newData); 
    }
  });
}, [faction, allData.factions]);



    /*
useEffect(() => {
        if (!divListUnitRef.current) return;
        const divListUnit = divListUnitRef.current;

        divListUnit.classList.add("slide-out");
        const handleSlideOutEnd = () => {
            divListUnit.classList.remove("slide-out");
            divListUnit.classList.add("slide-in");
        };

        const handleSlideInEnd = () => {
            divListUnit.classList.remove("slide-in");
        };

        divListUnit.addEventListener("transitionend", handleSlideOutEnd, { once: true });
        divListUnit.addEventListener("transitionend", handleSlideInEnd, { once: true });

        return () => {
            divListUnit.removeEventListener("transitionend", handleSlideOutEnd);
            divListUnit.removeEventListener("transitionend", handleSlideInEnd);
        };
    }, [allDataAAfficher]);
*/




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

    const classerParNom = (allDataAAfficher) => {
        slideOut(()=>{
        const unitesAvecFaction = allDataAAfficher.factions.flatMap(faction =>
            faction.units.map(unit => ({ ...unit, faction: faction.name }))
        );
        const unitesTriees = unitesAvecFaction.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        const factionsTriees = unitesTriees.map(unit => ({
            name: unit.faction,
            units: [unit]
        }));
        setAllDataAAfficher({ factions: factionsTriees });
        });
    };

    const classerParPoints = (allDataAAfficher) => {
        slideOut(()=>{
        const unitesAvecFaction = allDataAAfficher.factions.flatMap(faction =>
            faction.units.map(unit => ({ ...unit, faction: faction.name }))
        );
        const unitesTriees = unitesAvecFaction.sort((a, b) =>
            b.points - a.points
        );
        const factionsTriees = unitesTriees.map(unit => ({
            name: unit.faction,
            units: [unit]
        }));
        setAllDataAAfficher({ factions: factionsTriees });
        });

    };


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
        slideOut(()=>{
        const changement = e.target.textContent;
        if (changement !== "Sans filtre") {
            setTimeout(()=>{
            setType(changement);}, 150);
        } else {
            setType("")
        }
        });
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
                <div className='tri-list'>
                    <button onClick={() => classerParNom(allDataAAfficher)}>Classer par nom</button>
                    <button onClick={() => classerParPoints(allDataAAfficher)}>Classer par points</button>
                </div>
                <ul className="unit-list" ref={divListUnitRef}>
                    {allDataAAfficher.factions.map(faction =>
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
                    <div className='hautTableau'>
                        <div>Unités</div>
                        <div>Points</div>
                        <div>Actions</div>
                    </div>

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


                    <div className='ligneTotal'>
                        <div>Total</div>
                        <div>{totalPoint} points</div>
                        <div></div>
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