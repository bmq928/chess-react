// import {
//   WHITE, BLACK,
//   BISHOP, KING, KNIGHT, QUEEN, PAWN, ROOK
// } from '../constants'
// import { range } from './utils'
import { MAN_MOVE_PIECE, AI_MOVE_PIECE } from './action'
import game from '../engine'
import { makeBoard, toChessCoord } from './utils'
import { getBestMove } from '../ai'


// const rowMain = [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP, KNIGHT, ROOK]
// const rowPawns = range(8).map(val => PAWN)
// const rowEmpty = range(8).map(val => ({}))

// const blackRowMain = rowMain.map(piece => ({
//   name: piece,
//   color: BLACK,
//   alive: true
// }))
// const blackRowPawns = rowPawns.map(piece => ({
//   name: piece,
//   color: BLACK,
//   alive: true
// }))

// // rule of chess 
// const whiteRowMain = rowMain.reverse().map(piece => ({
//   name: piece,
//   color: WHITE,
//   alive: true
// }))
// const whiteRowPawns = rowPawns.map(piece => ({
//   name: piece,
//   color: WHITE,
//   alive: true
// }))

// const defaultBoard = [
//   blackRowMain,
//   blackRowPawns,
//   rowEmpty,
//   rowEmpty,
//   rowEmpty,
//   rowEmpty,
//   whiteRowPawns,
//   whiteRowMain
// ]

// const initialState = {
//   board: defaultBoard
// }

const defaultBoard = game.board()

export default function reducer(state = makeBoard(defaultBoard), action) {
  switch (action.type) {
    // case MOVE_PIECE:
    //   // console.log({ from: action.from, to: action.to })
    //   const fromCell = state[action.from.row][action.from.col]
    //   // const toCell = state[action.to.row][action.to.col]
    //   return state.map((row, idxRow) => row.map((cell, idxCell) => {
    //     if (idxCell === action.from.col && idxRow === action.from.row)
    //       return {}
    //     if (idxCell === action.to.col && idxRow === action.to.row)
    //       return fromCell
    //     return cell
    //   }))

    case MAN_MOVE_PIECE:
      const from = toChessCoord(action.from)
      const to = toChessCoord(action.to)
      game.move({ from, to })
      return makeBoard(game.board())

    case AI_MOVE_PIECE:
      const bestMove = getBestMove(game)
      game.move(bestMove)
      return makeBoard(game.board())


    default:
      return state
  }
}