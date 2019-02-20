// import {
//   WHITE, BLACK,
//   BISHOP, KING, KNIGHT, QUEEN, PAWN, ROOK
// } from '../constants'
// import { range } from './utils'
import { MAN_MOVE_PIECE, AI_MOVE_PIECE } from './action'
import game from '../engine'
import { makeBoard, toChessCoord } from './utils'

const defaultBoard = game.board()
const initialState = makeBoard(defaultBoard)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MAN_MOVE_PIECE:
      const from = toChessCoord(action.from)
      const to = toChessCoord(action.to)
      game.move({ from, to })
      return makeBoard(game.board())

    case AI_MOVE_PIECE:
      const bestMove = action.move
      game.move(bestMove)
      return makeBoard(game.board())


    default:
      return state
  }
}