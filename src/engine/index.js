/*eslint-disable  import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker'
import { GET_BEST_MOVE, GET_BOARD, MOVE_PIECE } from './message'


const worker = new Worker()

export const getBestMove = () => {
  return new Promise((resolve, reject) => {
    postMessage(GET_BEST_MOVE)

    worker.onmessage = ({data}) => resolve(data)
    worker.onerror = error => reject(error)
  })
}

export const getBoard = () => {
  return new Promise((resolve, reject) => {
    postMessage(GET_BOARD)
    worker.onmessage = ({data}) => resolve(data)
    worker.onerror = error => reject(error)
  })

}

export const movePiece = (move) => {
  return new Promise((resolve, reject) => {
    postMessage(MOVE_PIECE, move)
    worker.onmessage = ({data}) => resolve(data)
    worker.onerror = error => reject(error)
  })
}

export {default as defaultChessBoard} from './default-chess-board'



function postMessage(message, data = {}) {
  const tranfer = { message, data }
  worker.postMessage(tranfer)
}