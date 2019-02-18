import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as chessBoard from './ChessBoard'

const middlewares = []
const rootReducer = {
  board: chessBoard.reducer
}


let enhancer = applyMiddleware(...middlewares)
if (process.env.NODE_ENV === 'development') {
  // middlewares.push(composeWithDevTools())
  enhancer = composeWithDevTools(enhancer)
}

const store = createStore(
  combineReducers(rootReducer),
  enhancer
)

export default store

// export const initStore = reducers => {
//   const store = createStore(
//     combineReducers(reducers),
//     applyMiddleware(...middlewares)
//   )

//   return store
// }