import React from 'react'
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

  const cellOnClick = (row, col, isEmptyCell) => {
    if(!startCell && isEmptyCell) return
    if (!startCell) return chooseCell(row, col)
    if(row === startCell.row && col === startCell.col) return

    const toCell = { row, col }
    move(startCell, toCell)
  }

  const getCellStyle = (row, col) => {
    if(!startCell) return ''
    if(startCell.row === row && startCell.col === col) return 'cell-selected'
    return ''
  }

  return (
    <div className="Board">
      <table><tbody>
        {
          board.map((row, idxRow) => (
            <tr key={idxRow}>
              {row.map((cell, idxCell) => (
                <td key={idxCell}
                  className={getCellStyle(idxRow, idxCell)}
                  onClick={e => {
                    cellOnClick(idxRow, idxCell, isEmptyObject(cell))
                  }}
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

function isEmptyObject(obj) {
  const numKeys = Object.keys(obj).length
  return !numKeys
}

ChessBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  move: PropTypes.func.isRequired,
  error: PropTypes.string,
  chooseCell: PropTypes.func.isRequired,
  startCell: PropTypes.object
}