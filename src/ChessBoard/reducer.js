import {
  WHITE, BLACK,
  BISHOP, KING, KNIGHT, QUEEN, PAWN, ROOK
} from '../constants'
import { MOVE_PIECE } from './action'
import { range } from './utils'


const rowMain = [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP, KNIGHT, ROOK]
const rowPawns = range(8).map(val => PAWN)
const rowEmpty = range(8).map(val => ({}))

const blackRowMain = rowMain.map(piece => ({
  name: piece,
  color: BLACK,
  alive: true
}))
const blackRowPawns = rowPawns.map(piece => ({
  name: piece,
  color: BLACK,
  alive: true
}))

// rule of chess 
const whiteRowMain = rowMain.reverse().map(piece => ({
  name: piece,
  color: WHITE,
  alive: true
}))
const whiteRowPawns = rowPawns.map(piece => ({
  name: piece,
  color: WHITE,
  alive: true
}))

const defaultBoard = [
  blackRowMain,
  blackRowPawns,
  rowEmpty,
  rowEmpty,
  rowEmpty,
  rowEmpty,
  whiteRowPawns,
  whiteRowMain
]

// const initialState = {
//   board: defaultBoard
// }

export default function reducer(state = defaultBoard, action) {
  switch (action.type) {
    case MOVE_PIECE:
      console.log({ from: action.from, to: action.to })
      const fromCell = state[action.from.row][action.from.col]
      const toCell = state[action.to.row][action.to.col]
      return state.map((row, idxRow) => row.map((cell, idxCell) => {
        if (idxCell === action.from.col && idxRow === action.from.row)
          return {}
        if (idxCell === action.to.col && idxRow === action.to.row)
          return fromCell
        return cell
      }))
    default:
      return state
  }
}