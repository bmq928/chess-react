import { getBestMove } from '../ai'
import game from '../engine'

export const MAN_MOVE_PIECE = 'MOVE_PIECE'
export const manMovePiece = (from, to) => ({
  type: MAN_MOVE_PIECE,
  from,
  to
})

export const AI_MOVE_PIECE = 'AI_MOVE_PIECE'
export const aiMovePiece = (move) => ({
  type: AI_MOVE_PIECE,
  move
})

export const movePiece = (from, to) => dispatch => {
  dispatch(manMovePiece(from, to))

  return getBestMove(game)
    .then(move => dispatch(aiMovePiece(move)))
    .catch(err => console.log(err))
}