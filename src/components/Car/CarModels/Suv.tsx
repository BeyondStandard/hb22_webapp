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
    const { nodes, materials } = useGLTF("/suv.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.suvLuxury_1.geometry}
                    material={materials["plastic.013"]}
                />
                <mesh
                    geometry={nodes.suvLuxury_2.geometry}
                    material={materials["paintYellow.002"]}
                />
                <mesh
                    geometry={nodes.suvLuxury_3.geometry}
                    material={materials["_defaultMat.013"]}
                />
                <mesh
                    geometry={nodes.suvLuxury_4.geometry}
                    material={materials["lightBack.009"]}
                />
                <mesh
                    geometry={nodes.suvLuxury_5.geometry}
                    material={materials["window.013"]}
                />
                <mesh
                    geometry={nodes.suvLuxury_6.geometry}
                    material={materials["lightFront.011"]}
                />
                <mesh
                    geometry={nodes.suvLuxury_7.geometry}
                    material={materials["carTire.013"]}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/suv.gltf")
