import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div className='home-button'>{props.text}</div>
  )
}

export default Button