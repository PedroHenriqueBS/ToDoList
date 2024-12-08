import React from "react";

import Header from "../Header";
import Tasks from "../Tasks";

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header />
      <Tasks onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
      
    </>
  );
}
