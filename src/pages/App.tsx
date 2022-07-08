import React, { useEffect, useState } from "react"
import { Stack, Grid, styled, ThemeProvider } from "@mui/material"

import Menu from "../components/Menu"
import CarContainer from "../components/Car/CarContainer"
import theme from "../theme/theme.js"
import LogoTextImg from "../assets/logo_text.png"
// import AudioVisualizer from "./AudioVisualizer"
import AudioLoadingAnimation from "../components/AudioLoadingAnimation"
import DigitalClock from "../components/Info/DigitalClock"
import BasicSpeedDial from "../components/BasicSpeedDial"
import FixedBottomNavigation from "../components/FixedBottomNavigation"
import CarInfoList from "../components/Info/CarInfoList"
import InfoBox from "../components/Info/InfoBox"
import CarTitle from "../components/Info/CarTitle"
import ImagesBox from "../components/Info/ImagesBox"
import RoundedBox from "../components/Info/RoundedBox"
import AccuracyTable from "../components/Info/AccuracyTable"

const pages = {
    loading: 0,
    model: 1,
}

const subPages = {
    car: 0,
    information: 1,
    further: 2,
}

const ClockBox = styled("div")(() => ({
    position: "absolute",
    right: "1rem",
    top: "1rem",
}))

const AppContainer = styled("div")({
    height: "100vh",
})

const CarDisplayContainer = styled("div")({
    height: "100vh",
    width: "70vw",
    left: 0,
    position: "fixed",
    bottom: 0,
})

const InfoContainer = styled("div")({
    width: "30vw",
    position: "absolute",
    right: 0,
    top: "5rem",
    overflow: "auto",
    margin: "0 1rem 0 1rem",
})

const LogoTextContainer = styled("div")({
    position: "fixed",
    top: "2rem",
    left: "3rem",
})

const App: React.FC = () => {
    // const countRef = useRef()
    const [page, setPage] = useState(pages.loading)
    const [subPage, setSubPage] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPage(pages.model)
            console.log("Test")
        }, 100)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <ClockBox>
                    <DigitalClock />
                </ClockBox>
                <LogoTextContainer>
                    <img src={LogoTextImg} style={{ width: "15rem" }} />
                </LogoTextContainer>
                {page == 0 ? (
                    <AudioLoadingAnimation />
                ) : (
                    <>
                        <CarDisplayContainer>
                            <CarContainer />
                        </CarDisplayContainer>
                        <InfoContainer>
                            <InfoBox />
                            <CarTitle />
                            <RoundedBox />
                            <CarInfoList />
                            <ImagesBox />
                            <AccuracyTable />
                        </InfoContainer>
                    </>
                )}
                {/* <BottomNavigationContainer>
                    <FixedBottomNavigation setSubPages={setSubPage} />
                </BottomNavigationContainer> */}
            </AppContainer>
        </ThemeProvider>
    )
}

export default App
