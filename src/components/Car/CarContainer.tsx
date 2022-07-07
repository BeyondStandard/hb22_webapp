import React, { Suspense } from "react"
// import PropTypes from 'prop-types'
// import { Box } from '@mui/system'
import { styled } from "@mui/material"
import CarModel from "./CarModel"
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

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
  margin: "0 auto 1rem auto",
  minWidth: "250px",
  maxWidth: "850px",
}))

export default function CarContainer() {
  return (
  <CarBox>
    <Canvas>
    <Suspense fallback={null}>
      <CarModel/>
      <OrbitControls />
      <Environment preset="city" background={false} />
    </Suspense>
    </Canvas>
  </CarBox>
)}
