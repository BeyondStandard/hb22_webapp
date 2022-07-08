import React, { useEffect, useState } from "react"
import { styled, ThemeProvider } from "@mui/material"

import CarContainer from "../components/Car/CarContainer"
import theme from "../theme/theme.js"
import LogoTextImg from "../assets/logo_text.png"
import AudioLoadingAnimation from "../components/AudioLoadingAnimation"
import DigitalClock from "../components/Info/DigitalClock"
import CarInfoList from "../components/Info/CarInfoList"
import InfoBox from "../components/Info/InfoBox"
import CarTitle from "../components/Info/CarTitle"
import ImagesBox from "../components/Info/ImagesBox"
import ServerResponseBox from "../components/Info/ServerResponseBox"
import AccuracyTable from "../components/Info/AccuracyTable"
import useFetch from "../utils/hooks/useFetch"

const pages = {
    loading: 0,
    model: 1,
}

const carTypes = {
    bus: 0,
    electric: 1,
    formula: 2,
    jeep: 3,
    pickUp: 4,
    sedan: 5,
    sedanSport: 6,
    police: 7,
    suv: 8,
    van: 9,
    delivery: 10,
    car1: 11,
    car2: 12,
    car3: 13,
    pickUp1: 14,
    pickUp2: 15,
    ambulance: 16,
}

const ClockBox = styled("div")(() => ({
    height: "3rem",
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
    right: "1rem",
    top: "1rem",
    bottom: "1rem",
    overflow: "scroll",
    borderRadius: "12px",
    boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
})

const LogoTextContainer = styled("div")({
    position: "fixed",
    top: "2rem",
    left: "3rem",
})

const App: React.FC = () => {
    // const countRef = useRef()
    const [page, setPage] = useState(pages.loading)
    const [audio, setAudio] = useState(null)
    const { data } = useFetch(`http://34.159.110.201:3001/latest`) //${process.env.REACT_APP_BACKEND_URL}

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPage(pages.model)
        }, 100)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <LogoTextContainer>
                    <img
                        src={LogoTextImg}
                        style={{
                            width: "20rem",
                            transform: "translate(-3rem, -8rem)",
                        }}
                    />
                </LogoTextContainer>
                {page == 0 ? (
                    <AudioLoadingAnimation />
                ) : (
                    <>
                        <CarDisplayContainer>
                            <CarContainer carType={carTypes.formula} />
                        </CarDisplayContainer>
                        <InfoContainer
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                            }}
                        >
                            <div style={{ overflowY: "hidden" }}>
                                <ClockBox>
                                    <DigitalClock />
                                </ClockBox>
                                <InfoBox
                                    icon
                                    text="Hier können Sie alle Informationen über dieses Fahrzeug einsehen."
                                />
                                <CarTitle carTitle={data.car_type} />
                                <ServerResponseBox />
                                <CarInfoList />
                                <ImagesBox data={data} />
                                <AccuracyTable />
                            </div>
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
