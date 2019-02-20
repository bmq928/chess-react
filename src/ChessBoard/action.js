import * as game from '../engine'
import { toChessCoord } from './utils'

export const CHANGE_BOARD = 'CHANGE_BOARD'
export const changeBoard = (board) => ({
  type: CHANGE_BOARD,
  board
})

export const INVALID_MOVE = 'INVALID_MOVE'
export const makeAInvalidMove = () => ({
  type: INVALID_MOVE
})

export const movePiece = (from, to) => async dispatch => {
  const humanMove = {
    from: toChessCoord(from),
    to: toChessCoord(to)
  }
  
  //FIXME: if human make a invalid move, the ai automatic move
  const isValidMove = await game.movePiece(humanMove)

  if (!isValidMove) return dispatch(makeAInvalidMove())

  const boardAfterManMove = await game.getBoard()
  dispatch(changeBoard(boardAfterManMove))
  // console.log(boardAfterManMove)
  const bestAiMove = await game.getBestMove()
  await game.movePiece(bestAiMove)

  const boardAfterAiMove = await game.getBoard()
  dispatch(changeBoard(boardAfterAiMove))

}