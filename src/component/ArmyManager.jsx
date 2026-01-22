import { useState, useEffect } from "react";
import '/src/style/armyManager.css';

function ArmyManager({ allData, user }) {

    const [searchUnit, setSearchUnit] = useState("");
    const [hasArmy, setHasArmy] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState([]);
    const [armyName, setArmyName] = useState("");
    const [armiesUsers, setArmiesUsers] = useState([]);

    useEffect(() => {
        fetch(`https://warhammer40k.alwaysdata.net/warhammer/api/armyManager/check_user_armies.php?id_user=${user.id}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setHasArmy(data.hasArmy);
                    console.log(data);
                    setArmiesUsers(data.armies);
                    console.log(armiesUsers);
                }
            })
            .catch(error => console.error("Erreur :", error));
    }, [user.id]);

const registerArmy = async () => {
  const response = await fetch('https://warhammer40k.alwaysdata.net/warhammer/api/armyManager/registerArmy.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: armyName,
      units: selectedUnit,
      id_user: user.id
    })
  });
  const result = await response.json();
  if (result.success) {
    // Recharge les armées après enregistrement
    fetch(`http://localhost/warhammer/api/armyManager/check_user_armies.php?id_user=${user.id}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setArmiesUsers(data.armies);
          setHasArmy(data.hasArmy);
        }
      });
  } else {
    alert(`Erreur : ${result.error}`);
  }
};


    const filteredUnits = allData.factions
        .flatMap(faction => faction.units)
        .filter(unit => unit.name.toLowerCase().includes(searchUnit.toLowerCase()));
    console.log(filteredUnits);

    const addUnitToArmy = (unit) => {
        setSelectedUnit(prev => [...prev, unit])
        setSearchUnit("");
    }

    const loadArmyUnits = (army) => {
        setSelectedUnit(JSON.parse(army.units));
        setArmyName(army.name);
    };


    return (
        <div className="armyManager">
  <div className="mesArmees">
    <p>Liste des armées</p>
    {armiesUsers.length > 0 ? (
      <>
        {armiesUsers.map(army => (
          <div
            key={army.id}
            className="armiesUsers"
            onClick={() => {
              setSelectedUnit(JSON.parse(army.units));
              setArmyName(army.name);
            }}
          >
            {army.name}
          </div>
        ))}
        <button
          onClick={() => {
            setSelectedUnit([]);
            setArmyName("");
          }}
        >
          Créer une nouvelle armée
        </button>
      </>
    ) : (
      <button className="AddArmy" onClick={() => setHasArmy(true)}>
        Ajoute ta première armée!
      </button>
    )}
  </div>

  {hasArmy && (
    <div className="mesUnites">
      <input
        type="text"
        value={armyName}
        placeholder="Nom de l'armée"
        onChange={(e) => setArmyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rechercher une unité..."
        value={searchUnit}
        onChange={(e) => setSearchUnit(e.target.value)}
      />
      {searchUnit && (
        <div className="searchResults">
          {filteredUnits.map(unit => (
            <div key={unit.id} className="unitResult" onClick={() => addUnitToArmy(unit)}>
              <span>{unit.name}</span>
              <span>{unit.points}</span>
            </div>
          ))}
        </div>
      )}
      {selectedUnit.map((unit, index) => (
        <div className="uniteDelArmee" key={index}>
          <div>{unit.name}</div>
          <div>{unit.points}</div>
        </div>
      ))}
      <div className="enregister">
        <button onClick={registerArmy}>Enregistrer l'armée</button>
      </div>
    </div>
  )}
</div>

    );
}

export default ArmyManager;