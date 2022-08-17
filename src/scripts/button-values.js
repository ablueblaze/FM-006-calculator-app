const buttonValues = [
  {
    type: 'action',
    value: 'del',
    classNames: 'delete',
  },
  {
    type: 'arithmetic',
    value: '+',
    classNames: 'plus',
  },
  {
    type: 'arithmetic',
    value: '-',
    classNames: 'minus',
  },
  {
    type: 'decimal',
    value: '.',
    classNames: 'decimal',
  },
  {
    type: 'arithmetic',
    value: '/',
    classNames: 'divide',
  },
  {
    type: 'arithmetic',
    value: 'X',
    classNames: 'multiply',
  },
  {
    type: 'action',
    value: 'Reset',
    classNames: 'reset',
  },
  {
    type: 'arithmetic',
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

const numberBtns = numberBtnCreator()
const allButtons = [...numberBtns, ...buttonValues];

export default allButtons
