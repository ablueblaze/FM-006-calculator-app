import React from 'react';

export default function ThemeSelector(props) {
  const isChecked = (value) => {
    if (value === props.currentTheme) {
      return true;
    }
    return;
  };

  const themeValue = () => {
    const { currentTheme } = props;
    switch (currentTheme) {
      case 'theme1':
        return 1;
      case 'theme2':
        return 2;
      case 'theme3':
        return 3;
      default:
        break;
    }
  };

  return (
    <div className='theme-selector--container'>
      <h3>Theme:</h3>
      <div className='toggle-switch-container'>
        <div className='theme-number-container'>
          <p className='theme-number'>1</p>
          <p className='theme-number'>2</p>
          <p className='theme-number'>3</p>
        </div>
        <input
          className='theme-slider'
          type='range'
          name='theme-toggle'
          id='theme-selector'
          min={1}
          max={3}
          onChange={(e) => {
            props.handleThemeChange(e);
          }}
          defaultValue={themeValue()}
        />
      </div>
    </div>
  );
}
