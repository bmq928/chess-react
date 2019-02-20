import {
  CHANGE_BOARD,
  INVALID_MOVE,
  CHOOSE_CELL,
  RESET_CHOSEN_CELL,
  FINISH_MOVE
} from './action'
import { defaultChessBoard } from '../engine'
import { makeBoard } from './utils'

const initialState = {
  matrix: makeBoard(defaultChessBoard),
  error: '',
  startCell: null // format {row, col}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOARD: return {
      ...state,
      matrix: makeBoard(action.board)
    }

    case INVALID_MOVE: return {
      ...state,
      error: 'this is an invalid move'
    }

    case CHOOSE_CELL: return {
      ...state,
      startCell: {
        row: action.row,
        col: action.col
      }
    }

    case RESET_CHOSEN_CELL: return {
      ...state,
      startCell: null
    }

    case FINISH_MOVE : return {
      ...state,
      error: ''
    }

  }
  return state
}