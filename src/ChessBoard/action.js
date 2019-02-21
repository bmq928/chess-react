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

export const CHOOSE_CELL = 'CHOOSE_CELL'
export const chooseCell = (row, col) => ({
  type: CHOOSE_CELL,
  row,
  col
})

export const RESET_CHOSEN_CELL = 'RESET_CHOSEN_CELL'
export const resetChosenCell = () => ({
  type: RESET_CHOSEN_CELL
})

export const FINISH_MOVE = 'FINISH_MOVE'
export const finishMove = () => ({
  type: FINISH_MOVE
})




export const movePiece = (from, to) => async dispatch => {
  const humanMove = {
    from: toChessCoord(from),
    to: toChessCoord(to)
  }
  dispatch(resetChosenCell())

  // error move
  const isValidMove = await game.movePiece(humanMove)
  if (!isValidMove) {
    dispatch(makeAInvalidMove())
    dispatch(finishMove())
    return 
  }

  
  // real move
  const boardAfterManMove = await game.getBoard()
  dispatch(changeBoard(boardAfterManMove))
  const bestAiMove = await game.getBestMove()
  await game.movePiece(bestAiMove)

  const boardAfterAiMove = await game.getBoard()
  dispatch(changeBoard(boardAfterAiMove))
  dispatch(finishMove())
}