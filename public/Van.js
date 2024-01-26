/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/van.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.van_1.geometry}
                    material={materials["plastic.021"]}
                />
                <mesh
                    geometry={nodes.van_2.geometry}
                    material={materials["paintBlue.002"]}
                />
                <mesh
                    geometry={nodes.van_3.geometry}
                    material={materials["lightFront.019"]}
                />
                <mesh
                    geometry={nodes.van_4.geometry}
                    material={materials["_defaultMat.021"]}
                />
                <mesh
                    geometry={nodes.van_5.geometry}
                    material={materials["lightBack.015"]}
                />
                <mesh
                    geometry={nodes.van_6.geometry}
                    material={materials["window.021"]}
                />
                <mesh
                    geometry={nodes.van_7.geometry}
                    material={materials["carTire.021"]}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/van.gltf")