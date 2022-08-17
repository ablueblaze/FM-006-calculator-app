import React from 'react'

export default function Button(props) {
  const {classNames, value, handleEvent, type} = props
  return (
    <button
    className={classNames + " button"}
    onClick={() => {
      handleEvent(type, value)
      console.log('click')
    }}
    >{value}</button>
  )






}
