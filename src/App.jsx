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
  const numberBtns = numberBtnCreator();
  const [theme, setTheme] = useState('theme1');
  const [displayValue, setDisplayValue] = useState('0');
  console.log(displayValue)
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

  useEffect(() => {
    if (activeValues.num1 === []) {
      setDisplayValue('0')
      return
    }
    if (activeValues.storeInNum2 === false) {
      setDisplayValue(activeValues.num1.join(''))
    }

  }, [activeValues])

  const handleBtnEvents = (type, val) => {
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
        setActiveValues(prevVal => {
          return {
            ...prevVal,
            num1: [...prevVal.num1, val]
          }
        })
        console.log(type, val)
        break;
      default:
        break;
    }
  }

  const allButtons = [...numberBtns, ...buttonValues]

  return (
    <div className='App'>
      <Display theme={theme} displayValue={displayValue}/>
      <div className='button-field'>
        {allButtons.map((button) => {
          return (
            <Button
            classNames={button.classNames}
            value={button.value}
            //todo: Handle events
            handleEvent={() => {
              handleBtnEvents(button.type, button.value)
            }}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;


    // setDisplayValue(() => {
    //   action ? `${num}${action}` : `${num}`;
    // });