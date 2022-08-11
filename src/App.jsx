import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ThemeSelector from './components/Theme-selector';

import { add, minus, multiply, divide } from './scripts/arithmetic';
import{ calcEvent, resetEvent, deleteEvent, decimalEvent, numberBtnEvent } from './scripts/events' 

function App() {
  const [theme, setTheme] = useState('theme1');
  const [activeValues, setActiveValues] = useState({
    number: 0,
    arithmeticSymbol: false,
  });
  // todo: When using display value, will need to concat the array and format it.
  const [DisplayValue, setDisplayValue] = useState([]);



  return <div className='App'>
  </div>;
}

export default App;
