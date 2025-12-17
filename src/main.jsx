// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/App.css';
import Body from './component/Body.jsx';
import Header from './component/Header.jsx';
import AnimationMoche from './component/AnimationMoche.jsx';
import { DataProvider } from './component/DataContext.jsx'; // ← Import nommé
import { useState, useEffect } from 'react';

export default function App() {
  const [allData, setAllData] = useState({ factions: [] });
  const [selectedFaction, setSelectedFaction] = useState("all");

  useEffect(() => {
    fetch('/data/unit.json')
      .then(response => response.json())
      .then(data => setAllData(data))
      .catch(error => console.error("Données non chargées FF TOTAL", error));
  }, []);

  const handleFactionSelect = (faction) => {
    setSelectedFaction(faction);
  };

  return (
    <DataProvider> 
      <Header onFactionSelect={handleFactionSelect} />
      <AnimationMoche />
      <Body allData={allData} faction={selectedFaction} />
    </DataProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
