import { connect } from 'react-redux'
import ChessBoard from './ChessBoard'

import { manMovePiece, aiMovePiece } from './action'

const mapStateToProps = state => ({
  board: state.board
})

const mapDispatchToProps = dispatch => ({
  manMove: (from, to) => dispatch(manMovePiece(from, to)),
  aiMove: () => dispatch(aiMovePiece())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard)
export { default as reducer } from './reducer'