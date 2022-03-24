import React, { useState } from 'react'
import { func } from 'prop-types';

import "./css/ButtonGenerator.css"

export function ButtonGenerator({ onClickGenerateButton, onClickGeneratedButton }) {
  const [count, setCount] = useState(1)

  const generateButtons = () => {
    let buttons = []
    for (let i = 1; i < count; i++) {
      buttons.push(<button key={i} value={i} onClick={(e) => onClickGeneratedButton(e.target.value)} >Button {i}</button>)
    }
    return buttons
  }

  return (
    <div>
      {generateButtons()}
      <button onClick={() => { setCount(count => count + 1); onClickGenerateButton(count) }}>Add Button {count} </button>
    </div>
  )
}

ButtonGenerator.propTypes = {
  onClickGenerateButton: func.isRequired,
  onClickGeneratedButton: func.isRequired,
}
