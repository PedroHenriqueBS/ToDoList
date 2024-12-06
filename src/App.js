import React, { useState, useMemo, useEffect } from "react"
import GlobalStyle from "./styles/global";
import Layout from './components/Layout'
import { ThemeProvider } from "styled-components";
import themes from './styles/theme/index'

export default function App(){
  // Recupera o tema do localStorage ou usa 'dark' como padrão
  const savedTheme = localStorage.getItem('theme') || 'dark'; 
  const [theme, setTheme] = useState(savedTheme);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  function handleToggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);  // Salva o tema no localStorage
  }

   // Atualiza o tema no localStorage se o estado 'theme' mudar
   useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme}/>
    </ThemeProvider>
  )
}