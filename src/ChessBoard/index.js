import { connect } from 'react-redux'
import ChessBoard from './ChessBoard'

import { movePiece, chooseCell } from './action'

const mapStateToProps = state => ({
  board: state.board.matrix,
  error: state.board.error,
  startCell: state.board.startCell,

})

const mapDispatchToProps = dispatch => ({
  move: (from, to) => dispatch(movePiece(from, to)),
  chooseCell: (row, col) => dispatch(chooseCell(row, col))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard)
export { default as reducer } from './reducer'