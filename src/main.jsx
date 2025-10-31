import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/App.css'
import Body from './Body.jsx'
import Header from './component/Header.jsx'
import { useState } from 'react'

function App() {
  const [selectedFaction, setSelectedFaction] = useState("votann");

  const handleFactionSelect = (faction) => {
    setSelectedFaction(faction);
  }

  return (
    <>
      <Header onFactionSelect={handleFactionSelect} />
      <Body faction={selectedFaction} />
    </>
  );
}


createRoot(document.getElementById('root')).render(
  //<StrictMode>
<App/>
  //</StrictMode>,
);
