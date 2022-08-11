import React from 'react'

export default function Button(props) {
  const {theme, buttonName, buttonType, handelEvent, value} = props
  const classNames = `${theme} ${buttonName} ${buttonType} button`
  return (
    <button 
    className={classNames}
    onClick={handelEvent}
    value={value}
    >{value}</button>
  )
}
