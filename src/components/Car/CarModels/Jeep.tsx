/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Model({ ...props }) {
    const group = useRef()
    useFrame((state, delta) => {
        // console.log(group.current.position.x)
        if (group.current.position.x >= 0.5) {
            group.current.position.x -= 0.7

            group.current.position.y -= 0.1
            group.current.rotation.y += 0.02
        }
    })
    const { nodes, materials } = useGLTF("/jeep.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.suv_1.geometry}
                    material={materials["plastic.012"]}
                />
                <mesh
                    geometry={nodes.suv_2.geometry}
                    material={materials["paintGreen.004"]}
                />
                <mesh
                    geometry={nodes.suv_3.geometry}
                    material={materials["_defaultMat.012"]}
                />
                <mesh
                    geometry={nodes.suv_4.geometry}
                    material={materials["window.012"]}
                />
                <mesh
                    geometry={nodes.suv_5.geometry}
                    material={materials["lightBack.008"]}
                />
                <mesh
                    geometry={nodes.suv_6.geometry}
                    material={materials["lightFront.010"]}
                />
                <mesh
                    geometry={nodes.suv_7.geometry}
                    material={materials["carTire.012"]}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/jeep.gltf")
