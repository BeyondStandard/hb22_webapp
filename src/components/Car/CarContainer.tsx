import React, { Suspense } from "react"
// import PropTypes from 'prop-types'
// import { Box } from '@mui/system'
import { styled, useTheme } from "@mui/material"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import CarModel from "./CarModel"
import { OrbitControls, Html, useProgress } from "@react-three/drei"

import car01 from "./CarModels/Low-poly-car01.js"
import car02 from "./CarModels/Low-poly-car02.js"
import car03 from "./CarModels/Low-poly-car03.js"
import bus from "./CarModels/Low-poly-bus.js"
import pickUp1 from "./CarModels/Pick-up1"
import pickUp2 from "./CarModels/Pick-up2"
import police from "./CarModels/Police-car"
import delivery from "./CarModels/Delivery"
import electric from "./CarModels/Electric"
import formula from "./CarModels/Formula"
import jeep from "./CarModels/Jeep"
import pickUp from "./CarModels/Pick-up"
import sedan from "./CarModels/Sedan"
import sedanSport from "./CarModels/Sedan-sport"
import suv from "./CarModels/Suv"
import van from "./CarModels/Van"
import ambulance from "./CarModels/Ambulance"

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

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

interface ICarContainerProps {
    carType: number
}

const CarContainer: React.FC<ICarContainerProps> = ({ carType }) => {
    const theme = useTheme()
    // const carModel = React.useRef()
    // const [model, setModel] = React.useState<JSX.Element | undefined>()

    const models = [
        bus,
        electric,
        formula,
        jeep,
        pickUp,
        sedan,
        sedanSport,
        police,
        suv,
        van,
        delivery,
        car01,
        car02,
        car03,
        pickUp1,
        pickUp2,
        ambulance,
    ]

    if (carType < 0 || carType >= models.length) {
        return <div>Model could not be loaded</div>
    }

    const Model = models[carType]

    // useFrame(({ clock }) => {
    //     const a = clock.getElapsedTime()
    //     console.log(a) // the value will be 0 at scene initialization and grow each frame
    //     if (carModel.current) {
    //         carModel.current.rotation.x = clock.getElapsedTime()
    //     }
    // })

    return (
        // <CarBox>
        <>
            <Dot style={{ backgroundColor: "#B6B6B6" }} />
            <Canvas
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <ambientLight intensity={0.3} />
                {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
                <Suspense fallback={<Loader />}>
                    {/* <CarModel /> */}
                    {/* <ObjModelLoader /> */}
                    <OrbitControls
                        enableZoom={false}
                        rotateSpeed={2}
                        // autoRotate={true}
                        autoRotateSpeed={5}
                    />
                    <Model
                        scale={[2, 2, 2]}
                        position={[10, 0, 0]}
                        rotation={[0.2, -1.5, 0]}
                    />
                </Suspense>
            </Canvas>
        </>
        // </CarBox>
    )
}

export default CarContainer
