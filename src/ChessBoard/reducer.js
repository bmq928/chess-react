import { CHANGE_BOARD, INVALID_MOVE } from './action'
import { defaultChessBoard } from '../engine'
import { makeBoard } from './utils'

const initialState = makeBoard(defaultChessBoard)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOARD:
      return makeBoard(action.board)
  }
  return state
}