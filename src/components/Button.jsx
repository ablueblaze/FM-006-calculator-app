import React from 'react'

export default function Button(props) {
  const {classNames, value, handleEvent} = props
  return (
    <button
    className={classNames + " button"}
    onClick={handleEvent}
    >{value}</button>
  )






}
