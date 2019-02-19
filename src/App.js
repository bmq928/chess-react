import React from 'react'
import { Provider } from 'react-redux'

import ChessBoard from './ChessBoard'
import store from './store'

import './App.css'

import { getBestMove } from './ai'
import game from './engine/index'
console.log(getBestMove(game))

export default function App() {
  return (
    <Provider store={store}>
      <ChessBoard />
    </Provider>
  )
}