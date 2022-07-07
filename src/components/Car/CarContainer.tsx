import React, { Suspense } from "react"
// import PropTypes from 'prop-types'
// import { Box } from '@mui/system'
import { styled } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import CarModel from "./CarModel"
import { Environment, OrbitControls } from "@react-three/drei"
import ObjModelLoader from "./ObjModelLoader"

const CarBox = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    border: "1px solid lightGrey",
    borderRadius: "5px",
    padding: "0.625rem",
    color: "grey",
    flexGrow: "1",
    flewWrap: "wrap",
    justifyContent: "center",
    margin: "10rem auto 1rem auto",
    minWidth: "250px",
    maxWidth: "50rem",
    minHeight: "25rem",
    maxHeight: "50rem",
}))

export default function CarContainer() {
    return (
        <CarBox>
            <Canvas
                style={{
                    width: "inherit",
                    height: "inherit",
                }}
            >
                <Suspense fallback={null}>
                    {/* <CarModel /> */}
                    <ObjModelLoader />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </CarBox>
    )
}
