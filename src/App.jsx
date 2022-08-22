import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ThemeSelector from './components/Theme-selector';
import themes from './scripts/themes';
import allButtons from './scripts/button-values';

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
        console.log('Theme switch failed.');
        break;
    }
  };

  const okayToPlaceDecimal = () => {
    // Splits and reverses the display value
    const testArray = displayValue.split('').reverse();

    // Checks to see if there is a decimal in the array
    // returns it's index
    const firstDecimalIndex = testArray.findIndex((element) => element === '.');
    console.log(firstDecimalIndex);

    // Checks to see if there is a symbol other than decimal in the array
    // returns it's index
    const firstSymbolIndex = testArray.findIndex((element) => {
      if (element === '+') {
        return element === '+';
      }
      if (element === '-') {
        return element === '-';
      }
      if (element === 'X') {
        return element === 'X';
      }
      if (element === '/') {
        return element === '/';
      }
    });

    if (firstSymbolIndex === -1 || firstDecimalIndex === -1) {
      return true;
    }
    // compares the two indexes to see if the decimal shows up before the symbol
    if (firstDecimalIndex > firstSymbolIndex) {
      // if true, can place an index
      return true;
    }

    if (firstDecimalIndex !== -1) return true;
    // if false, can't place index
    return false;
  };

  //! Working Area \\

  const calc = () => {
    // original idea for this function from:
    // https://codepen.io/lalwanivikas/pen/eZxjqo?editors=1010

    // forming an array of numbers.
    const numbers = displayValue.split(/\/|\+|\-|X/gm);

    // forming an array of operators.
    const operatorsRaw = displayValue.split(/[0-9]+/);
    const operators = operatorsRaw.filter((ele) => ele !== '' && ele !== '.');

    // now we are looping through the array and doing one operation at a time.
    // first divide, then multiply, then subtraction and then addition
    // as we move we are alternating the original numbers and operators array
    // the final element remaining in the array will be the output

    let divide = operators.indexOf('/');
    while (divide !== -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf('/');
    }

    let multiply = operators.indexOf('X');
    while (multiply !== -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf('X');
    }

    let subtract = operators.indexOf('-');
    while (subtract !== -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf('-');
    }

    let add = operators.indexOf('+');
    while (add !== -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(
        add,
        2,
        parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
      );
      operators.splice(add, 1);
      add = operators.indexOf('+');
    }
    return numbers;
  };

  // determine and execute the appropriate action upon action button event
  const actionSwitch = (keyValue) => {
    switch (keyValue) {
      // Remove the last index of the display value
      case 'del':
        setDisplayValue((prevDisplay) => {
          if (prevDisplay === '0' || prevDisplay.length === 1) {
            return '0';
          }
          return prevDisplay.slice(0, -1);
        });
        break;

      // Clear all values back to default
      case 'Reset':
        setDisplayValue('0');
        break;

      // Calculate the total of given equation
      case '=':
        setDisplayValue((prevDisplay) => {
          const newValue = parseFloat(calc()).toFixed(2).replace(/0+$/, '');
          if (newValue.slice(-1) === '.') {
            return newValue.slice(0, -1);
          }
          return newValue;
        });
        break;
      default:
        console.log('Action switch failed.');
        break;
    }
  };

  const symbolHandler = (keyValue) => {
    // displayValue minus last element
    const shortValue = displayValue.slice(0, -1);
    // last character of the display value
    const lastCharacter = displayValue.slice(-1);

    // Check if decimal is okay to place
    if (keyValue === '.') {
      if (okayToPlaceDecimal() === false) return;
    }

    if (lastCharacter === keyValue) {
      // if the last element and the keyValue are the same
      return;
    } else if (parseInt(lastCharacter)) {
      // if the last element is a number
      setDisplayValue((prevDisplay) => {
        return prevDisplay + keyValue;
      });
    } else if (lastCharacter === '0' && keyValue === '.') {
      // if the last element is a 0 and keyValue is a decimal
      // todo: why is this needed?
      setDisplayValue((prevDisplay) => {
        return prevDisplay + keyValue;
      });
    } else {
      // if the last element is a symbol, replace it with the new symbol
      setDisplayValue(shortValue + keyValue);
    }
    console.log('Symbol handler failed.');
  };

  const buttonEvent = (keyValue, type) => {
    console.log(`displayValue type: ${typeof displayValue}`);
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
        break;
      default:
        console.log('Button event failed.');
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
