import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ThemeSelector from './components/Theme-selector';
import Display from './components/Display';

function App() {
  const [currentValue, setCurrentValue] = useState([]);
  const [theme, setTheme] = useState([
    {
      theme1: true,
      theme2: false,
      theme3: false,
    },
  ]);

  return <div className='App'></div>;
}

export default App;
