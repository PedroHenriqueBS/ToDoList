import React, { useState, useMemo } from "react"
import GlobalStyle from "./styles/global";
import Layout from './components/Layout'
import { ThemeProvider } from "styled-components";
import themes from './styles/theme/index'

export default function App(){

  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme}/>
    </ThemeProvider>
  )
}