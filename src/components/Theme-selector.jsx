import React from 'react';

export default function ThemeSelector(props) {
  const isChecked = (value) => {
    if (value === props.currentTheme) {
      return true
    }
    return 
  } 
  return (
    <div className='theme-selector--container'>
      <h3>Theme:</h3>
      <div className='toggle-switch-container'>
        <div className='theme-number-labels'>
          <label htmlFor='toggle1'>1</label>
          <label htmlFor='toggle2'>2</label>
          <label htmlFor='toggle3'>3</label>
        </div>
        <div className='theme-toggle'>
          <input
            onChange={() => {
              props.handleEvent('theme1');
            }}
            type='radio'
            name='theme-toggle'
            id='toggle1'
            checked={props.currentTheme === 'theme1'}
          />
          <input
            onChange={() => {
              props.handleEvent('theme2');
            }}
            type='radio'
            name='theme-toggle'
            id='toggle2'
            checked={props.currentTheme === 'theme2'}
          />
          <input
            onChange={() => {
              props.handleEvent('theme3');
            }}
            type='radio'
            name='theme-toggle'
            id='toggle3'
            checked={props.currentTheme === 'theme3'}
          />
        </div>
      </div>
    </div>
  );
}
