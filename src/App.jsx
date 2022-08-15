import { useState } from 'react';
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
  // const [DisplayValue, setDisplayValue] = useState([]);
  const [activeValues, setActiveValues] = useState({
    firstNum: '390',
    secondNum: '',
    arithmeticSymbol: '/',
  });

  const numberBtns = numberBtnCreator();

  const numberAction = (number) => {
    setActiveValues((prevVals) => {
      if (prevVals.arithmeticSymbol === false) {
        return {
          ...prevVals,
          firstNum: prevVals.firstNum + number,
        };
      }
      return {
        ...prevVals,
        secondNum: prevVals.secondNum + number,
      };
    });
  };

  const actionAction = (action) => {
    switch (action) {
      case 'del':
        setActiveValues((prevVals) => {
          if (prevVals.arithmeticSymbol === false) {
            const newValue = prevVals.firstNum.split('');
            newValue.splice(-1, 1);
            return {
              ...prevVals,
              firstNum: newValue.join(''),
            };
          }
          const newValue = prevVals.secondNum.split('');
          newValue.splice(-1, 1);
          return {
            ...prevVals,
            firstNum: newValue.join(''),
          };
        });
        console.log(activeValues)
        console.log(action);
        break;
      case '+':
        console.log(action);
        break;
      case '-':
        console.log(action);
        break;
      case 'X':
        console.log(action);
        break;
      case '/':
        console.log(action);
        break;
      case '.':
        setActiveValues((prevVals) => {
          if (prevVals.arithmeticSymbol === false) {
            if (prevVals.firstNum.includes('.')) {
              console.log('decimal in place');
              return {
                ...prevVals,
              };
            }
            console.log('decimal not in place');
            return {
              ...prevVals,
              firstNum: prevVals.firstNum + '.',
            };
          }
          return { ...prevVals };
        });
        console.log(activeValues);
        break;
      case '=':
        console.log(action);
        break;
      case 'Reset':
        //todo: reset dislpay numbers
        setActiveValues({
          firstNum: '',
          secondNum: '',
          arithmeticSymbol: false,
        });
        console.log(action);
        break;

      default:
        break;
    }
  };

  return (
    <div className='App'>
      <div className='button-field'>
        {numberBtns.map((button) => {
          return (
            <button
              key={nanoid()}
              className={`button ${button.classNames}`}
              onClick={(e) => {
                numberAction(button.value);
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
                actionAction(button.value);
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
