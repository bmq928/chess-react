import React from 'react'
import PropTypes from 'prop-types'

import { range } from './utils'
import Cell from '../Cell'

import './style.scss'

export default function ChessBoard({ board }) {

  return (
    <div className="Board">
      <table>
        <tbody>
          {
            board.map((row, idxRow) => (
              <tr key={idxRow}>
                {row.map((cell, idxCell) => (
                  <td key={idxCell}>
                    <Cell name={cell.piece} color={cell.color} />
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

ChessBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired
}