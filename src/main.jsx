import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/App.css'
import Body from './component/Body.jsx'
import Header from './component/Header.jsx'
import { useState, useEffect } from 'react'

function App() {

  const [allData, setAllData] = useState({factions: []});

  //Chargement initial des données complètes du JSON

  useEffect(() => {
    fetch('/data/unit2.json')
      .then(response => response.json())
      .then(data => { setAllData(data);})
      .catch(error => console.error("Données non chargées FF TOTAL", error));

  }, [])

  const [selectedFaction, setSelectedFaction] = useState("all");

  const handleFactionSelect = (faction) => {
    setSelectedFaction(faction);
  }

  return (
    <>
      <Header onFactionSelect={handleFactionSelect} />
      <Body allData={allData} faction={selectedFaction} />
    </>
  );
}


createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <App />
  //</StrictMode>,
);
