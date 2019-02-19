/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker.js'

const w = new Worker()
w.postMessage('nah')
w.onmessage = function() {
  console.log('hear from ai/index.js') 
}









export function getBestMove() {
  // worker.postMessage('some')
  // worker.onmessage = e => {
  //   console.log(e)
  // }

  return 'h2'
}

