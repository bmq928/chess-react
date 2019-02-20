import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import * as chessBoard from './ChessBoard'

const middlewares = [thunk]
const rootReducer = {
  board: chessBoard.reducer
}


let enhancer = applyMiddleware(...middlewares)
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
  
  enhancer = applyMiddleware(...middlewares)
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