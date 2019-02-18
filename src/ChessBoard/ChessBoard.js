import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ChessPiece from '../ChessPiece'
import './style.scss'

export default function ChessBoard({ board, move }) {

  const [cellFrom, setCellFrom] = useState(null)

  const movePiece = (row, col) => {
    if(cellFrom) {
      const cellTo = {row, col}
      move(cellFrom, cellTo)
      setCellFrom(null)
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
                    name={cell.name}
                    color={cell.color}
                    alive={cell.alive}
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

function CellBoard({ name, color, alive }) {
  const isEmptyCell = !name && !color
  return isEmptyCell ?
    <div /> :
    <ChessPiece
      name={name}
      color={color}
      alive={alive}
    />
}

ChessBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  move: PropTypes.func.isRequired
}