import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ChessPiece from '../ChessPiece'
import './style.scss'

export default function ChessBoard({ board, manMove, aiMove }) {

  const [cellFrom, setCellFrom] = useState(null)

  const movePiece = (row, col) => {
    if(cellFrom) {
      const cellTo = {row, col}
      setCellFrom(null)

      manMove(cellFrom, cellTo)
      aiMove()
      
    } else {
      setCellFrom({row, col})
    }
  }

  return (
    <div className="Board">
      <table><tbody>
        {
          board.map((row, idxRow) => (
            <tr key={idxRow}>
              {row.map((cell, idxCell) => (
                <td key={idxCell} 
                  onClick={e => movePiece(idxRow, idxCell)}
                > 
                  <CellBoard
                    type={cell.type}
                    color={cell.color}
                  />

                </td>
              ))}
            </tr>
          ))
        }
      </tbody></table>
    </div>
  )
}

function CellBoard({ type, color}) {
  const isEmptyCell = !type && !color
  return isEmptyCell ?
    <div /> :
    <ChessPiece
      type={type}
      color={color}
    />
}

ChessBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  manMove: PropTypes.func.isRequired,
  aiMove: PropTypes.func
}