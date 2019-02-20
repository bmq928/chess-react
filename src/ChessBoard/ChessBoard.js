import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ChessPiece from '../ChessPiece'
import { useToast } from '../Toast'
import './style.scss'

export default function ChessBoard({
  board,
  move,
  error,
  startCell,
  chooseCell
}) {
  const { toastError } = useToast()

  if (error) toastError(error)

  const cellOnClick = (row, col) => {
    if (!startCell) return chooseCell(row, col)

    const toCell = { row, col }
    move(startCell, toCell)
  }

  return (
    <div className="Board">
      <table><tbody>
        {
          board.map((row, idxRow) => (
            <tr key={idxRow}>
              {row.map((cell, idxCell) => (
                <td key={idxCell}
                  onClick={e => cellOnClick(idxRow, idxCell)}
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

function CellBoard({ type, color }) {
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
  move: PropTypes.func.isRequired,
  error: PropTypes.string,
  chooseCell: PropTypes.func.isRequired,
  startCell: PropTypes.object
}