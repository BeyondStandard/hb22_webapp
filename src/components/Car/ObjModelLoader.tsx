/* eslint-disable */
import * as THREE from "three"
import * as React from "react"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"

function Box(props: JSX.IntrinsicElements["mesh"]) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    )
}

// function loadObject(obj: any, mc: any) {
//     return new OBJLoader().setMaterials(mc).load(obj, (group) => {})
// }

// function loadMaterial(obj: any, mtl: any) {
//     return new MTLLoader().setPath(obj).load(mtl, (mc) => {
//         loadObject(obj, mc)
//     })
// }

export default function ObjModelLoader() {
    const ref = useRef<THREE.Mesh>(null!)

    const mtlFile = "/src/assets/models/LowPoly/Textures/carPolice.png"
    const objFile = "/src/assets/models/LowPoly/Low_Poly_Vehicles_carPolice.obj"
    const objFile2 = "/src/assets/models/LowPoly/Low_Poly_Vehicles_car01.obj"
    const mtlFile2 = "/src/assets/models/LowPoly/Textures/car01.png"

    // const group = loadMaterial(objFile2, mtlFile2)
    // console.log(group)

    const mtl = useLoader(TextureLoader, mtlFile2)
    const obj = useLoader(OBJLoader, objFile2)

    // useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
        <>
            <ambientLight intensity={0.2} />
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
            <mesh>
                <primitive object={obj} scale={[0.01, 0.01, 0.01]} position={[0, -1, 0]} />
                {/* <sphereGeometry args={[1, 32, 32]} /> */}
                <meshStandardMaterial map={mtl} attach="material" />
            </mesh>
        </>
    )
    // return (
    //     <Canvas>
    //         <ambientLight intensity={0.5} />
    //         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    //         <pointLight position={[-10, -10, -10]} />
    //         <Box position={[-1.2, 0, 0]} />
    //         <Box position={[1.2, 0, 0]} />
    //     </Canvas>
    // )
}
