import React, { PropTypes } from 'react'

export default function Button (props) {
  const { onClick, text, disabled } = props

  return (
    <button
      className='stopwatch__btn'
      onClick={onClick}
    >  {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}
