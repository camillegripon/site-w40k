// component/DataContext.jsx
import { createContext, useContext, useState, useRef } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [allDataAAfficher, setAllDataAAfficher] = useState({factions: []});
  const [hasScrolled, setHasScrolled] = useState(false);
  const divListUnitRef = useRef(null);

  return (
    <DataContext.Provider value={{
      allDataAAfficher,
      setAllDataAAfficher,
      hasScrolled,
      setHasScrolled,
      divListUnitRef,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
