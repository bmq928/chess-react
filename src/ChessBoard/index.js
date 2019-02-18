import { connect } from 'react-redux'
import ChessBoard from './ChessBoard'

const mapStateToProps = state => ({
  board: state.board
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard)
export { default as reducer } from './reducer'