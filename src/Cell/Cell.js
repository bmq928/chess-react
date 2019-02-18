import React from 'react'

import ChessPiece from '../ChessPiece'

import './style.scss'

export default function Cell() {
  return (
    <div className="Cell">
      <ChessPiece name="Bishop" color="white" alive={true} />
    </div>
  )
}