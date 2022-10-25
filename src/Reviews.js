import { useRef, useState } from 'react';
import Nav from './components/Nav';

export default function Reviews() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const darkSwitch = useRef();
  return (
    <div ref={darkSwitch}>
      <Nav
        darkSwitch={darkSwitch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchState={searchState}
        setSearchState={setSearchState}
      />
    </div>
  );
}
