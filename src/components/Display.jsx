import React from 'react';

export default function Display(props) {
  return <div className={props.theme}>{props.displayValue}</div>;
}
