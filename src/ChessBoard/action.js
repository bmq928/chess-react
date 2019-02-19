export const MAN_MOVE_PIECE = 'MOVE_PIECE'
export const manMovePiece = (from, to) => ({
  type: MAN_MOVE_PIECE,
  from,
  to
})

export const AI_MOVE_PIECE = 'AI_MOVE_PIECE'
export const aiMovePiece = () => ({
  type: AI_MOVE_PIECE
})

export const movePiece = () => {
  
}