import { connect } from 'react-redux'
import ChessBoard from './ChessBoard'

import { movePiece } from './action'

const mapStateToProps = state => ({
  board: state.board
})

const mapDispatchToProps = dispatch => ({
  move: (from, to) => dispatch(movePiece(from, to))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard)
export { default as reducer } from './reducer'