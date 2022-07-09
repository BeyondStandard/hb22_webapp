/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/delivery.gltf")
    useFrame((state, delta) => {
        // console.log(group.current.position.x)
        if (group.current.position.x >= 0.5) {
            group.current.position.x -= 0.7

            group.current.position.y -= 0.1
            group.current.rotation.y += 0.02
        }
    })
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.delivery_1.geometry}
                    material={materials.lightBack}
                />
                <mesh
                    geometry={nodes.delivery_2.geometry}
                    material={materials.paintGreen}
                />
                <mesh
                    geometry={nodes.delivery_3.geometry}
                    material={materials["plastic.002"]}
                />
                <mesh
                    geometry={nodes.delivery_4.geometry}
                    material={materials["paintWhite.002"]}
                />
                <mesh
                    geometry={nodes.delivery_5.geometry}
                    material={materials["_defaultMat.002"]}
                />
                <mesh
                    geometry={nodes.delivery_6.geometry}
                    material={materials["lightFront.002"]}
                />
                <mesh
                    geometry={nodes.delivery_7.geometry}
                    material={materials["window.002"]}
                />
                <mesh
                    geometry={nodes.delivery_8.geometry}
                    material={materials["carTire.002"]}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/delivery.gltf")
