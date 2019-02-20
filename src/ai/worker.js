/* eslint-disable import/no-webpack-loader-syntax */
import { predictMove } from './predict-move'

// export default () => {
//   self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
//     console.log('hear from ai/worker.js')
//     console.log(predictMove)
//     postMessage('something')
//   })
// }


self.addEventListener('message', e => {
  const game = JSON.parse(e.data)
  const move = predictMove(game)

  self.postMessage(move)
})

// export default function