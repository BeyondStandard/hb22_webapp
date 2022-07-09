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

// bus, minivan, pickup, sportscar, jeep, truck, crossover, car
const carTypes = {
    bus: {
        id: 0,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    electric: {
        id: 1,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    sportscar: {
        id: 2,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    jeep: {
        id: 3,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    pickup: {
        id: 4,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    car: {
        id: 5,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    sedanSport: {
        id: 6,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    police: {
        id: 7,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    crossover: {
        id: 8,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    minivan: {
        id: 9,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    truck: {
        id: 10,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    car1: {
        id: 11,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    car2: {
        id: 12,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    car3: {
        id: 13,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    pickUp1: {
        id: 14,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    pickUp2: {
        id: 15,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
    ambulance: {
        id: 16,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.5, 0],
    },
}

const ClockBox = styled("div")(() => ({
    height: "4rem",
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
    const { data } = useFetch(`http://34.159.110.201:3001/latest`) //${process.env.REACT_APP_BACKEND_URL}

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPage(pages.model)
        }, 100)

        return () => clearTimeout(timeout)
    }, [])

    if (data) {
        // data.probability = JSON.parse(data.probability)
        // console.log(data)
    } else {
        return <div>Data endpoint not up</div>
    }

    console.log(data.car_type)

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
                            <CarContainer
                                carType={
                                    carTypes[
                                        data.car_type as keyof typeof carTypes
                                    ]
                                }
                            />
                        </CarDisplayContainer>
                        <InfoContainer
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                            }}
                        >
                            {/* <div
                                style={{
                                    overflow: "scroll",
                                    height: "95%",
                                    position: "relative",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            > */}
                            <div
                                style={{
                                    overflowY: "hidden",
                                    // boxShadow: `inset 1px 20px 30px 5px ${theme.palette.secondary.main}`,
                                }}
                            >
                                <ClockBox>
                                    <DigitalClock />
                                </ClockBox>
                                <InfoBox
                                    icon
                                    text="Hier können Sie alle Informationen über das erkannte Fahrzeug einsehen."
                                />
                                <CarTitle carTitle={data.car_type} />
                                <CarInfoList data={data} />
                                <ServerResponseBox responseTime={data.time} />
                                <ImagesBox data={data} />
                                <AccuracyTable
                                    data={data.probability.confidence}
                                />
                            </div>
                            {/* </div> */}
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
