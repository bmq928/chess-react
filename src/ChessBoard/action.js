export const MOVE_PIECE = 'MOVE_PIECE'
export const movePiece = (from, to) => ({
  type: MOVE_PIECE,
  from,
  to
})

