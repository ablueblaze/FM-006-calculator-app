import React from 'react'

export default function Button(props) {
  return (
    <button 
    className={props.theme}
    onClick={props.handelEvent}
    value={props.value}
    >{props.value}</button>
  )
}
