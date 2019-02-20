import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import {useToast} from '.'
import { withSnackbar, SnackbarProvider } from 'notistack'

export const ToastContext = createContext()

function _ContainerNotistack({ children, enqueueSnackbar }) {
  
  return (
    <ToastContext.Provider value={enqueueSnackbar}>
      {children}
    </ToastContext.Provider>
  )
}

export default function ContainerWithToast({ children }) {
  const ContainerNotistack = withSnackbar(_ContainerNotistack)
  return (
    <SnackbarProvider maxSnack={5}>
      <ContainerNotistack>
        {children}
      </ContainerNotistack>
    </SnackbarProvider>
  )
}