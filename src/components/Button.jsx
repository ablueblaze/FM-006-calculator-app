import React from 'react';

export default function Button(props) {
  const { classNames, value, eventHandler, type } = props;
  return (
    <button
      className={classNames + ' button'}
      onClick={() => {
        eventHandler(value, type);
      }}>
      {value}
    </button>
  );
}
