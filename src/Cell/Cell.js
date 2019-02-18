import React from 'react'
import PropTypes from 'prop-types'

import ChessPiece from '../ChessPiece'

import './style.scss'

export default function Cell({ name, color }) {
  const isEmpyCell = (!name) && (!color)
  
  return (
    <div className="Cell">
      {
        !isEmpyCell ?
          <ChessPiece name={name} color={color} alive={true} /> :
          ''
      }
    </div>
  )
}

Cell.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}