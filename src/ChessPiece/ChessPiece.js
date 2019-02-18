import React from 'react'
import PropTypes from 'prop-types'

import { getPieceImg } from './utils'

import './style.scss'

export default function ChessPiece({ name, alive, color }) {
  const Img = getPieceImg(name, color)

  return (
    <div className="ChessPiece">
      {alive ? Img : <div />}
    </div>
  )
}

ChessPiece.propTypes = {
  name: PropTypes.string.isRequired,
  alive: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
}