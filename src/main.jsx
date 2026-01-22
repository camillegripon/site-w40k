// main.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/App.css';
import ArmyManager from './component/ArmyManager.jsx';
import RegisterForm from './component/RegisterForm.jsx';
import Body from './component/Body.jsx';
import Header from './component/Header.jsx';
import HeaderBody from './component/HeaderBody.jsx';
import AnimationMoche from './component/AnimationMoche.jsx';
import LaCommunaute from './component/LaCommunaute.jsx';
import { DataProvider } from './component/DataContext.jsx'; // ← Import nommé
import { useState, useEffect } from 'react';

export default function App() {
  const [allData, setAllData] = useState({ factions: [] });
  const [selectedFaction, setSelectedFaction] = useState("all");
  const [user, setUser] = useState(null);

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
      <Router>
        <Header
          onFactionSelect={handleFactionSelect}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route
            path="/"
            element={
                <>
                  <HeaderBody onFactionSelect={handleFactionSelect} />
                  <AnimationMoche />
                  <Body allData={allData} faction={selectedFaction} />
                </>
            }
          />
          <Route
            path="/register"
            element={<RegisterForm setUser={setUser} />}
          />
          <Route
            path="/community"
            element={<LaCommunaute user={user} allData={allData} />}
          />
          <Route
            path="/user"
            element={<ArmyManager user={user} allData={allData}/>}
          />
        </Routes>
      </Router>
    </DataProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
