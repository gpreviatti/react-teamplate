import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button type={props.type}>
        {props.title}
      </button>
    </div>
  );
}
