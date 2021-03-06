/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/policecar.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.police_1.geometry}
                    material={materials["paintWhite.004"]}
                />
                <mesh
                    geometry={nodes.police_2.geometry}
                    material={materials["plastic.007"]}
                />
                <mesh
                    geometry={nodes.police_3.geometry}
                    material={materials["_defaultMat.007"]}
                />
                <mesh
                    geometry={nodes.police_4.geometry}
                    material={materials["lightFront.007"]}
                />
                <mesh
                    geometry={nodes.police_5.geometry}
                    material={materials["lightBack.005"]}
                />
                <mesh
                    geometry={nodes.police_6.geometry}
                    material={materials["window.007"]}
                />
                <mesh
                    geometry={nodes.police_7.geometry}
                    material={materials["carTire.007"]}
                />
                <mesh
                    geometry={nodes.police_8.geometry}
                    material={materials["lightBlue.003"]}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/policecar.gltf")
