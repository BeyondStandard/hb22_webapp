/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
// import car from "low-poly-car02.gltf"

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/low-poly-car02.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.Low_Poly_Vehicles_car02.geometry}
                material={materials["Material.001"]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.1}
            />
        </group>
    )
}

useGLTF.preload("./low-poly-car02.gltf")
