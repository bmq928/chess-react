/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker.js'

const worker = new Worker()

export function getBestMove(game) {
  return new Promise((resolve, reject) => {
    worker.postMessage(game)
    worker.onmessage = e => {
      resolve(e.data)
    }
    worker.onerror = err => {
      reject(err)
    }
  })
}

