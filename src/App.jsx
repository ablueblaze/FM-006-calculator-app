import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ThemeSelector from './components/Theme-selector';
import { add, minus, multiply, divide } from './scripts/arithmetic';
import allButtons from './scripts/button-values';
import {
  calcEvent,
  resetEvent,
  deleteEvent,
  decimalEvent,
  numberBtnEvent,
} from './scripts/events';

function App() {
  const [theme, setTheme] = useState('theme1');
  const [displayValue, setDisplayValue] = useState('');
  const [activeValues, setActiveValues] = useState({
    num1: [],
    arithmeticSymbol: false,
    num2: [],
  });

  const resetAllValues = () => {
    setDisplayValue('');
    setActiveValues({
      num1: [],
      arithmeticSymbol: false,
      num2: [],
    });
  };

  const deleteSingleValues = () => {
    if (activeValues.num1.length === 0) {
      console.log('Nothing to delete')
      return
    }
    setActiveValues((prevVal) => {
      const { num1, num2, arithmeticSymbol} = prevVal;
      if (num2.length > 1) {
        const newArray = num2;
        newArray.pop();
        return {
          ...prevVal,
          num2: newArray,
        };
      }
      if (num2.length === 1) {
        return {
          ...prevVal,
          num2: [],
        };
      }
      if (arithmeticSymbol) {
        return {
          ...prevVal,
          arithmeticSymbol: false,
        };
      }
      if (num1.length > 1) {
        const newArray = num1;
        newArray.pop();
        return {
          ...prevVal,
          num1: newArray,
        };
      }
      if (num1.length === 1) {
        return {
          ...prevVal,
          num1: [],
        };
      }
    });
  };

  // Handles the Delete and Reset buttons
  const actionSwitch = (val) => {
    switch (val) {
      case 'del':
        // todo: delete functionality
        deleteSingleValues();
        break;
      case 'Reset':
        resetAllValues();
        break;
      default:
        break;
    }
  };

  // todo: Not sure if I need this?
  const arithmeticSwitch = (val) => {
    const {num1, arithmeticSymbol, num2} = activeValues;
    const num1Val = parseInt(num1.join(''))
    const num2Val = parseInt(num2.join(''))
    switch (val) {
      case '+':
        return num1Val + num2Val
        break;
      case '-':
        return num1Val - num2Val
        break;
      case '/':
        return num1Val / num2Val
        break;
      case 'X':
        return num1Val * num2Val
        break;
      default:
        break;
    }
  };

  const setArithmeticSymbol = (val) => {
    setActiveValues((prevVal) => {
      return {
        ...prevVal,
        arithmeticSymbol: val,
      };
    });
  };

  // Todo: Set up the full display in the use effect hook
  // update the display box when the active values change
  useEffect(() => {
    if (activeValues.num1.length === 0) {
      setDisplayValue('0');
      return;
    }
    setDisplayValue(`
    ${activeValues.num1.join('')} ${
      activeValues.arithmeticSymbol 
        ? activeValues.arithmeticSymbol
        : ''
    } ${activeValues.num2.join('')}
    `);
  }, [activeValues]);

  const setDecimal = () => {
    setActiveValues((prevVal) => {
      if (prevVal.arithmeticSymbol) {
        return {
          ...prevVal,
          num2: prevVal.num2.includes('.') // Checks if num2 has a decimal
            ? prevVal.num2
            : prevVal.num2.length === 0 // Checks if num2 is empty
            ? ['0', '.']
            : [...prevVal.num2, '.'],
        };
      }
      return {
        ...prevVal,
        num1: prevVal.num1.includes('.') // Checks if num1 has a decimal
          ? prevVal.num1
          : prevVal.num1.length === 0 // Checks if num1 is empty
          ? ['0', '.']
          : [...prevVal.num1, '.'],
      };
    });
  };

  const setNumber = (val) => {
    if (activeValues.arithmeticSymbol) {
      setActiveValues((prevVal) => {
        return {
          ...prevVal,
          num2: [...prevVal.num2, val],
        };
      });
    } else {
      setActiveValues((prevVal) => {
        return {
          ...prevVal,
          num1: [...prevVal.num1, val],
        };
      });
    }
  };

  const handleBtnEvents = (type, val) => {
    switch (type) {
      case 'action':
        actionSwitch(val);
        break;
      case 'arithmetic':
        if (activeValues.arithmeticSymbol === false) {
          setArithmeticSymbol(val);
          break;
        } 
        // todo: Would this be better as:
        // Calculate total
        // set active values
        // set Arithmetic symbol
        break;
      case 'decimal':
        setDecimal();
        break;
      case 'number':
        setNumber(val);
        break;
      default:
        break;
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Calc</h1>
        <ThemeSelector />
      </header>
      <Display theme={theme} displayValue={displayValue} />
      <div className='button-field'>
        {allButtons.map((button) => {
          return (
            <Button
              key={nanoid()}
              type={button.type}
              value={button.value}
              classNames={button.classNames}
              handleEvent={handleBtnEvents}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
