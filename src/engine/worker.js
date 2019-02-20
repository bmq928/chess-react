/* eslint-disable import/no-webpack-loader-syntax */
import { predictMove } from './ai'
import game from './controller'
import { GET_BEST_MOVE, GET_BOARD, MOVE_PIECE } from './message'


self.addEventListener('message', e => {

  const { message, data } = e.data

  switch (message) {
    case GET_BEST_MOVE:
      return postResultFromFn(predictMove, game)

    case GET_BOARD:
      return postResultFromFn(game.board)

    case MOVE_PIECE:
      return postResultFromFn(game.move, data)

    default:
      throw new Error('Wrong method')
  }

})

/**
 * Post data to worker with result return from fn
 * @param {Function} fn 
 * @param  {...any} data
 * 
 */
function postResultFromFn(fn, ...data) {
  const result = fn(...data)
  self.postMessage(result)
}
