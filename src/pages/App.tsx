import React, { useEffect, useRef, useState } from "react"
import { styled, ThemeProvider, Button, Grid, Typography } from "@mui/material"

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
import gasolineImage from "./../assets/gasoline.png"
import dieselImage from "./../assets/Fuel.png"
import electricImage from "./../assets/electric.png"

const pages = {
    loading: 0,
    model: 1,
}

// bus, minivan, pickup, sportscar, jeep, truck, crossover, car, outsidecars
const carTypes = {
    bus: {
        id: 0,
        scale: [0.05, 0.05, 0.05],
        position: [0, -1, 0],
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
        position: [0, -1, 0],
        rotation: [0.2, -1.5, 0],
    },
    car: {
        id: 5,
        scale: [2, 2, 2],
        position: [10, 0, 0],
        rotation: [0.2, -1.3, 0],
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
    outsidecars: {
        id: 16,
        scale: [2, 2, 2],
        position: [10, 0.5, 0],
        rotation: [0.1, -1.2, 0],
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

const InnerShadowTop = styled("div")({
    width: "30vw",
    height: "3rem",
    position: "absolute",
    right: "1.2rem",
    top: "1.2rem",
    overflow: "scroll",
    borderRadius: "12px",
    boxShadow: `inset 0px 20px 30px -20px ${theme.palette.secondary.main}`,
})

const InnerShadowBottom = styled("div")({
    width: "30vw",
    height: "3rem",
    position: "absolute",
    right: "1.2rem",
    bottom: "1rem",
    overflow: "scroll",
    borderRadius: "12px",
    boxShadow: `inset 0px -20px 30px -20px ${theme.palette.secondary.main}`,
})

const LogoTextContainer = styled("div")({
    position: "fixed",
    top: "2rem",
    left: "3rem",
})

const ButtonContainer = styled("div")({
    position: "absolute",
    left: "1rem",
    bottom: "1rem",
})

const SecondaryInfoContainer = styled("div")({
    position: "absolute",
    top: "50%",
    transform: "translate(2rem, -50%)",
})

const IconBackground = styled("div")({
    position: "absolute",
    backgroundColor: "rgb(255, 255, 255, 0.8)",
    width: "90px",
    height: "90px",
})

const App: React.FC = () => {
    // const countRef = useRef()
    const [page, setPage] = useState(pages.loading)
    const { data, refetch } = useFetch(`http://34.159.110.201:3001/latest`) //${process.env.REACT_APP_BACKEND_URL}
    const [isPaused, setPause] = useState(false)
    const ws = useRef<WebSocket | null>(null)

    useEffect(() => {
        ws.current = new WebSocket("ws://34.159.110.201:3001/ws")
        ws.current.onopen = () => console.log("ws opened")
        ws.current.onclose = () => console.log("ws closed")

        // const wsCurrent = ws.current

        // return () => {
        //     wsCurrent.close()
        // }
    }, [])

    useEffect(() => {
        if (!ws.current) return

        ws.current.onmessage = (e) => {
            if (isPaused) return
            const message = JSON.parse(e.data)
            if (message["state"] == true) {
                refetch()
                setPage(pages.model)

                // if (ws.current) ws.current.close()
            }
        }
    }, [isPaused])

    const handleReset = () => {
        setPause(false)
        setPage(pages.loading)
    }

    const handleLoadLatestModel = () => {
        setPause(true)
        setPage(pages.model)
    }

    if (!data) {
        return (
            <div>
                <div>Data endpoint not up</div>
                <AudioLoadingAnimation />
            </div>
        )
    }

    const fuelType = Math.floor(Math.random() * 4)
    switch (fuelType) {
        case 0:
            data.engine_type = "Gasoline"
            break
        case 1:
            data.engine_type = "Diesel"
            break
        case 2:
            data.engine_type = "Electric"
            break
    }

    console.log(data)

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
                    <>
                        <AudioLoadingAnimation />
                        <ButtonContainer>
                            <Button
                                variant="outlined"
                                onClick={handleLoadLatestModel}
                            >
                                Load Latest Model
                            </Button>
                        </ButtonContainer>
                    </>
                ) : (
                    <>
                        <CarDisplayContainer>
                            <CarContainer
                                carType={
                                    // bus, minivan, pickup, sportscar, jeep, truck, crossover, car, outsidecars
                                    carTypes[
                                        data.probability.winner_label.toLowerCase() as keyof typeof carTypes
                                    ]
                                }
                            />
                        </CarDisplayContainer>
                        <SecondaryInfoContainer>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                                direction="column"
                                spacing={5}
                            >
                                <Grid
                                    item
                                    xs={4}
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    {data.engine_type != "Gasoline" && (
                                        <IconBackground />
                                    )}
                                    <img src={gasolineImage} width="50px" />
                                    <Typography variant="body1">
                                        Gasoline
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    {(data.engine_type != "Diesel" ||
                                        !data.engine_type) && (
                                        <IconBackground />
                                    )}
                                    <img src={dieselImage} width="50px" />
                                    <Typography variant="body1">
                                        Diesel
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    style={{ textAlign: "center" }}
                                >
                                    {data.engine_type != "Electric" && (
                                        <IconBackground />
                                    )}
                                    <img src={electricImage} width="50px" />
                                    <Typography variant="body1">
                                        Electric
                                    </Typography>
                                </Grid>
                            </Grid>
                        </SecondaryInfoContainer>
                        <InfoContainer
                            sx={{
                                "&::-webkit-scrollbar": { display: "none" },
                                backgroundColor: theme.palette.secondary.main,
                                border: "3px solid black",
                            }}
                        >
                            <div
                                style={{
                                    overflowY: "hidden",
                                }}
                            >
                                <ClockBox>
                                    <DigitalClock />
                                </ClockBox>
                                <InfoBox
                                    icon
                                    text="Here you can review all information about the identified vehicle."
                                />
                                <CarTitle
                                    carTitle={data.probability.winner_label}
                                />
                                <ServerResponseBox responseTime={data.time} />
                                <CarInfoList data={data} />
                                <ImagesBox data={data} />
                                <AccuracyTable
                                    data={data.probability.confidence}
                                />
                            </div>
                        </InfoContainer>
                        <InnerShadowTop />
                        <InnerShadowBottom />
                        <ButtonContainer>
                            <Button variant="outlined" onClick={handleReset}>
                                Reset
                            </Button>
                        </ButtonContainer>
                    </>
                )}
            </AppContainer>
        </ThemeProvider>
    )
}

export default App
