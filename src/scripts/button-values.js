const buttonValues = [
  {
    type: 'action',
    value: 'del',
    classNames: 'delete',
  },
  {
    type: 'symbol',
    value: '+',
    classNames: 'plus',
  },
  {
    type: 'symbol',
    value: '-',
    classNames: 'minus',
  },
  {
    type: 'symbol',
    value: '.',
    classNames: 'decimal',
  },
  {
    type: 'symbol',
    value: '/',
    classNames: 'divide',
  },
  {
    type: 'symbol',
    value: 'X',
    classNames: 'multiply',
  },
  {
    type: 'action',
    value: 'Reset',
    classNames: 'reset',
  },
  {
    type: 'action',
    value: '=',
    classNames: 'equal',
  },
];

const numberBtnCreator = () => {
  let numbers = [];
  for (let i = 0; i <= 9; i++) {
    numbers.push({
      type: 'number',
      value: `${i}`,
      classNames: `num-${i}`,
    });
  }
  return numbers;
};

const numberBtns = numberBtnCreator();
const allButtons = [...numberBtns, ...buttonValues];

export default allButtons;
