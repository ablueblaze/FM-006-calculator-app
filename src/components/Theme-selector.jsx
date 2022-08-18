import React from 'react'

export default function ThemeSelector(props) {
  return (
    <div className='theme-selector--container'>
      <h3>Theme:</h3>
      <div className="toggle-switch-container">
        <div className="theme-number-labels">
          <label htmlFor="toggle1">1</label>
          <label htmlFor="toggle2">2</label>
          <label htmlFor="toggle3">3</label>
        </div>
        <div className="theme-toggle">
          <input type="radio" name="theme-toggle" id="toggle1" />
          <input type="radio" name="theme-toggle" id="toggle2" />
          <input type="radio" name="theme-toggle" id="toggle3" />
        </div>
      </div>

    </div>
  )
}
