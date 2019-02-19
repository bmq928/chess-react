/* eslint-disable import/no-webpack-loader-syntax */
// import { predictMove } from 'worker-loader!./predict-move'

// export default () => {
//   self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
//     console.log('hear from ai/worker.js')
//     console.log(predictMove)
//     postMessage('something')
//   })
// }



// Respond to message from parent thread
self.addEventListener('message', (event) => {
  self.postMessage({ foo: 'foo' })
  console.log('here from worker')
})