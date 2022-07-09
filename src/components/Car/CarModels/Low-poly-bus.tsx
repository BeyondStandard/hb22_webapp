/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/low-poly-bus.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.Low_Poly_Vehicles_bus.geometry}
                material={materials["Material.001"]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.1}
            />
        </group>
    )
}

useGLTF.preload("/low-poly-bus.gltf")
