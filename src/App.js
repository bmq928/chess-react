import React from 'react'
import { Provider } from 'react-redux'

import ChessBoard from './ChessBoard'
import { ToastContainer } from './Toast'
import store from './store'

import './App.css'

export default function App() {
  return (
    <ToastContainer>
      <Provider store={store}>
        <ChessBoard />
      </Provider>
    </ToastContainer>
  )
}