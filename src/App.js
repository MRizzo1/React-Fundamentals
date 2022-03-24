import React from "react";
import { Route } from "react-router";
import { Home } from "./components/Home";

import { ThemeProvider } from "styled-components";
import { themes } from "./components/Themes"
import { GlobalStyles } from "./components/GlobalStyles"

function App() {
  const [theme, setTheme] = React.useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Route exact path="/" >
        <Home theme={theme} setTheme={setTheme} />
      </Route>
    </ThemeProvider>
  );

}


export default App;
