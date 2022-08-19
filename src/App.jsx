import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ThemeSelector from './components/Theme-selector';
import allButtons from './scripts/button-values';
import themes from './scripts/themes';

function App() {
  const [theme, setTheme] = useState('theme1');
  const [displayValue, setDisplayValue] = useState('0');

  // Sets the :root properties of the site when theme is changed
  useEffect(() => {
    for (let i of themes) {
      document.documentElement.style.setProperty(
        `${i.property}`,
        `${i[theme]}`
      );
    }
  }, [theme]);

  const themeChangeEvent = (e) => {
    switch (e.target.value) {
      case '1':
        setTheme('theme1');
        break;
      case '2':
        setTheme('theme2');
        break;
      case '3':
        setTheme('theme3');
        break;
      default:
        break;
    }
  };

  // determine and execute the appropriate action
  const actionSwitch = (keyValue) => {
    console.log('action switch fired');
    switch (keyValue) {
      case 'del':
        setDisplayValue((prevDisplay) => {
          if (prevDisplay === '0' || prevDisplay.length === 1) {
            return '0';
          }
          return prevDisplay.slice(0, prevDisplay.length - 1);
        });
        break;
      case 'Reset':
        break;
      case '=':
        break;
      default:
        break;
    }
  };

  const symbolHandler = (keyValue) => {
    console.log('symbol switch fired');
    // displayValue minus last element
    const shortValue = displayValue.slice(0, -1);
    const lastElement = displayValue.slice(-1);
    console.log(`last element: ${lastElement}|| shortValue: ${shortValue}`);

    // if the last element and the key are the same
    if (lastElement === keyValue) {
      console.log('option 1');
      return;
      // if the last element is a number
    } else if (parseInt(lastElement)) {
      console.log('option 2');
      setDisplayValue((prevDisplay) => {
        return prevDisplay + keyValue;
      });
    } else {
      setDisplayValue(shortValue + keyValue);
    }
    // if (lastElement === NaN && lastElement !== '.') {
    //   console.log('option 2');
    //   setDisplayValue(shortValue + keyValue);
    //   return;
    // }
    // if (lastElement !== NaN && keyValue !== '.') {
    //   console.log('option 3');
    //   setDisplayValue((prevDisplay) => {
    //     return prevDisplay + keyValue;
    //   });
    // }
    // if (keyValue === '.') {
    //   console.log('option 4');
    //   setDisplayValue((prevDisplay) => {
    //     return prevDisplay + '0.';
    //   });
    // }
  };

  const buttonEvent = (keyValue, type) => {
    // last element of the current displayValue
    console.log(`keyValue: ${keyValue} || type: ${type}`);
    console.log('-----');
    switch (type) {
      case 'action':
        actionSwitch(keyValue);
        break;
      case 'symbol':
        symbolHandler(keyValue);
        break;
      case 'number':
        setDisplayValue((prevDisplay) => {
          if (prevDisplay === '0') {
            return keyValue;
          }
          return prevDisplay + keyValue;
        });
      default:
        break;
    }
  };

  return (
    <div className={'App '}>
      <header>
        <h1>Calc</h1>
        <ThemeSelector
          handleThemeChange={themeChangeEvent}
          currentTheme={theme}
        />
      </header>
      <Display displayValue={displayValue} />
      <div className='button-field'>
        {allButtons.map((button) => {
          return (
            <Button
              key={nanoid()}
              type={button.type}
              value={button.value}
              classNames={button.classNames}
              eventHandler={buttonEvent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
