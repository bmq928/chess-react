import {
  WHITE, BLACK,
  BISHOP, KING, KNIGHT, QUEEN, PAWN, ROOK
} from '../constants'
import { range } from './utils'

const rowMain = [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP, KNIGHT, ROOK]
const rowPawns = range(8).map(val => PAWN)
const rowEmpty = range(8).map(val => ({}))

const blackRowMain = rowMain.map(piece => ({ piece, color: BLACK }))
const blackRowPawns = rowPawns.map(piece => ({ piece, color: BLACK }))

// rule of chess 
const whiteRowMain = rowMain.reverse().map(piece => ({ piece, color: WHITE }))
const whiteRowPawns = rowMain.map(piece => ({ piece, color: WHITE }))

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
  // switch (action) {
  //   case '':
      
  //     break
  
  //   default:
  //     return state
  // }

  return state
}