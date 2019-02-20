import { useContext, useState } from 'react'
import { ToastContext } from './ToastContainer'

export default function useToast() {
  const toast  = useContext(ToastContext)
  
  return toast
}