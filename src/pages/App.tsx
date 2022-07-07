import React from "react"
import { Container } from "@mui/system"
import CarContainer from "../components/Car/CarContainer"
import { ThemeProvider } from "@mui/material"
import theme from "../theme/theme.js"

const App: React.FC = () => {
  return (
    <div>Test</div>
    // <ThemeProvider theme={theme}>
    //   <Container>
    //     <CarContainer />
    //   </Container>
    // </ThemeProvider>
  )
}

export default App
