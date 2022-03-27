import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider, DefaultTheme } from 'styled-components'
import { dark } from 'uikit'

const theme: DefaultTheme = {
  ...dark,
  colors: {
    ...dark.colors,
    gradients: {
      ...dark.colors.gradients,
      bubblegum: 'transparent',
    },
    primary: '#44c4e2',
 //   secondary: '#152b4e',
  //  backgroundAlt: '#0d1d36',
    input: 'transparent',
    text: '#fff',
    secondary: '#0d1d36',
    backgroundAlt: '#201F34',
    textSubtle: '#c7f2f9',
  },
  nav: {
    background: 'rgba(13,29,54,0.8)'
  },
  card: {
    ...dark.card,
    background: '#152B4E',
  },
  toggle: {
    ...dark.toggle,
    handleBackground: '#fff',
  },
}

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: true, toggleTheme: () => {}})

const ThemeContextProvider = ({ children } : {children: React.ReactNode}) => {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
