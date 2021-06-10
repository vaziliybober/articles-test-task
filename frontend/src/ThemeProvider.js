import React from 'react'
import { Global as GlobalStyles, css } from '@emotion/react'
import styled from '@emotion/styled'

import { ThemeProvider as EmotionThemeProvider, useTheme } from '@emotion/react'

import light from './themes/light'
import dark from './themes/dark'

import Button from './components/shared/Button'

function GlobalStyler() {
  const theme = useTheme()

  const globalStyles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    p,
    ul,
    li {
      margin: 0;
      padding: 0;
    }

    body {
      color: ${theme.colors.text};
      background: ${theme.colors.background};
      font-family: ${theme.fonts.body};
      font-size: 16px;
    }
  `

  return <GlobalStyles styles={globalStyles} />
}

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = React.useState(false)

  return (
    <EmotionThemeProvider theme={isDark ? dark : light}>
      <ThemeToggler onClick={() => setIsDark(!isDark)}>theme</ThemeToggler>
      <GlobalStyler />
      {children}
    </EmotionThemeProvider>
  )
}

const ThemeToggler = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;

  padding: 5px;
  font-size: 10px;
`
