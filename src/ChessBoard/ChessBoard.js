import React from 'react'
import PropTypes from 'prop-types'

import Cell from '../Cell'

import './style.scss'

export default function ChessBoard({ numRow, numCol }) {
  return (
    <div className="Board">
      <table>
        <tbody>
          {range(numRow).map((val, idx) => (
            <BoardRow key={idx} numCol={numCol} />))
          }
        </tbody>
      </table>
    </div>
  )
}

ChessBoard.propTypes = {
  numCol: PropTypes.number.isRequired,
  numRow: PropTypes.number.isRequired
}

function BoardRow({ numCol }) {
  return (
    <tr>
      {range(numCol).map((val, idx) => <BoardCell key={idx} />)}
    </tr>
  )
}

function BoardCell() {
  return (
    <td>
      <Cell />
    </td>
  )
}


/**
 * e.x: range(3) => [0,1,2]
 * @param {Number} num 
 * @returns {Array}
 */
function range(num) {
  return [...Array(num).keys(num)]
}