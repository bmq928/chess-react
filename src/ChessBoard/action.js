import * as game from '../engine'
import { toChessCoord } from './utils'

// export const MAN_MOVE_PIECE = 'MOVE_PIECE'
// export const manMovePiece = (from, to) => ({
//   type: MAN_MOVE_PIECE,
//   from,
//   to
// })

// export const AI_MOVE_PIECE = 'AI_MOVE_PIECE'
// export const aiMovePiece = (move) => ({
//   type: AI_MOVE_PIECE,
//   move
// })

export const CHANGE_BOARD = 'CHANGE_BOARD'
export const changeBoard = (board) => ({
  type: CHANGE_BOARD,
  board
})

export const movePiece = (from, to) => async dispatch => {
  const humanMove = {
    from: toChessCoord(from),
    to: toChessCoord(to)
  }
  await game.movePiece(humanMove)
  const boardAfterManMove = await game.getBoard()
  dispatch(changeBoard(boardAfterManMove))
  // console.log(boardAfterManMove)
  const bestAiMove = await game.getBestMove()
  await game.movePiece(bestAiMove)

  const boardAfterAiMove = await game.getBoard()
  dispatch(changeBoard(boardAfterAiMove))

}