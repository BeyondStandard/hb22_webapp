import React, { Suspense } from "react"
// import PropTypes from 'prop-types'
// import { Box } from '@mui/system'
import { styled, useTheme } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import CarModel from "./CarModel"
import { Environment, OrbitControls } from "@react-three/drei"
import ObjModelLoader from "./ObjModelLoader"
import { Html, useProgress } from "@react-three/drei"

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

// const CarBox = styled("div")(() => ({
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "25rem",
//     minWidth: "50rem",
//     maxWidth: "100rem",
//     maxHeight: "50rem",
// }))

const Dot = styled("div")(() => ({
    height: "8rem",
    width: "30rem",
    borderRadius: "50%",
    position: "absolute",
    display: "inline-block",
    filter: "blur(5px)",
    left: "50%",
    transform: "translate(-50%, 35rem)",
}))

export default function CarContainer() {
    const theme = useTheme()
    return (
        // <CarBox>
        <>
            <Dot style={{ backgroundColor: "#B6B6B6" }} />
            <Canvas
                style={{
                    width: "100%",
                    height: "100%",
                    // margin: "0 auto 5rem auto",
                    // border: "1px solid lightGrey",
                }}
            >
                <Suspense fallback={null}>
                    {/* <CarModel /> */}
                    <ObjModelLoader />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </>
        // </CarBox>
    )
}
