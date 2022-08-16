import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ThemeSelector from './components/Theme-selector';
import { add, minus, multiply, divide } from './scripts/arithmetic';
import { buttonValues, numberBtnCreator } from './scripts/button-values';
import {
  calcEvent,
  resetEvent,
  deleteEvent,
  decimalEvent,
  numberBtnEvent,
} from './scripts/events';

function App() {
  // const [theme, setTheme] = useState('theme1');
  const [calc, setCalc] = useState(false);
  const [DisplayValue, setDisplayValue] = useState('0');
  const [activeValues, setActiveValues] = useState({
    num1: [],
    num2: [],
    arithmeticSymbol: null,
    storeInNum2: false,
  });

  const resetAllValues = () => {
    setDisplayValue('0')
    setActiveValues({
      num1: [],
      num2: [],
      arithmeticSymbol: null,
      storeInNum2: false,
    });
  };


  // useEffect(() => {
    
  // }, [calc]);

  // const setValuesForContinuedCalcs = (num, action) => {
  //   setActiveValues({
  //     num1: [`${num}`],
  //     num2: [],
  //     arithmeticSymbol: action ? action : null,
  //     storeInNum2: true,
  //   });
  //   console.log(DisplayValue);
  //   console.log(activeValues);
  // };

  const numberBtns = numberBtnCreator();

  const actionSwitch = (val) => {
    switch (val) {
      case 'del':
        // todo: delete functionality
        console.log(activeValues)
        break;
      case 'Reset':
        resetAllValues()
        break;
      default:
        console.log('action switch failed')
        break;
    }
  }

  const arithmeticSwitch = (val) => {
    switch (val) {
      case '+':
        console.log(val)
        break;
      case '-':
        console.log(val)
        break;
      case '/':
        console.log(val)
        break;
      case 'X':
        console.log(val)
        break;
      default:
        break;
    }
  }

  const handleAction = (type, val) => {
    console.log(`Handle action data: ${type} ${val}`)
    switch (type) {
      case 'action':
        actionSwitch(val)
        break;
      case 'arithmetic':
        arithmeticSwitch(val)
        break;
      case 'decimal':
        // todo: Decimal functionality
        console.log('decimal function')
        break;
      case 'number':
        console.log(type, val)
        break;
      default:
        break;
    }
  }

  return (
    <div className='App'>
      <div className='button-field'>
        {numberBtns.map((button) => {
          return (
            <button
              key={nanoid()}
              className={`button ${button.classNames}`}
              onClick={(e) => {
                handleAction(button.type, button.value);
                console.log(activeValues);
              }}
              value={button.value}>
              {button.value}
            </button>
          );
        })}
        {buttonValues.map((button) => {
          return (
            <button
              key={nanoid()}
              className={`button ${button.classNames}`}
              onClick={(e) => {
                handleAction(button.type, button.value);
              }}
              value={button.value}>
              {button.value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;


    // setDisplayValue(() => {
    //   action ? `${num}${action}` : `${num}`;
    // });