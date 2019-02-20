import { useContext, useState } from 'react'
import { ToastContext } from './ToastContainer'

export default function useToast() {
  const toast  = useContext(ToastContext)
  
  const toastError = (message) => toast(message, {
    variant: 'error'
  })

  return {
    toastError
  }
}