import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ThemeSelector from './components/Theme-selector';
import allButtons from './scripts/button-values';

function App() {
  const [theme, setTheme] = useState('theme1')
  return (
    <div className={'App ' + theme}>
      <header>
        <h1>Calc</h1>
        <ThemeSelector />
      </header>
      <Display theme={'theme1'} displayValue={'display-value'} />
      <div className='button-field'>
        {allButtons.map((button) => {
          return (
            <Button
              key={nanoid()}
              type={button.type}
              value={button.value}
              classNames={button.classNames}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
