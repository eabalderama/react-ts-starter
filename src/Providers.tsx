import React from 'react'
import { ModalProvider } from 'uikit'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { ToastsProvider } from 'contexts/ToastsContext'

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ToastsProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </ToastsProvider>
    </ThemeContextProvider>
  )
}

export default Providers