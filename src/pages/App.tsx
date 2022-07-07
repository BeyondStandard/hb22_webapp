import React, { useRef, useEffect, useState } from "react"
import { Container } from "@mui/system"
import { styled, ThemeProvider } from "@mui/material"

import Menu from "../components/Menu"
import CarContainer from "../components/Car/CarContainer"
import theme from "../theme/theme.js"
// import AudioVisualizer from "./AudioVisualizer"
import AudioLoadingAnimation from "../components/AudioLoadingAnimation"
import DigitalClock from "../components/DigitalClock"

const pages = {
    loading: 0,
    model: 1,
}

const ClockBox = styled("div")(() => ({
    position: "absolute",
    right: "1rem",
    top: "1rem",
}))

const App: React.FC = () => {
    // const countRef = useRef()
    const [page, setPage] = useState(pages.loading)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPage(pages.model)
            console.log("Test")
        }, 100)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <ClockBox>
                <DigitalClock />
            </ClockBox>
            <Container>
                {page == 0 ? (
                    <AudioLoadingAnimation />
                ) : (
                    <>
                        {/* <AudioVisualizer /> */}
                        <CarContainer />
                        <Menu />
                    </>
                )}
            </Container>
        </ThemeProvider>
    )
}

export default App
