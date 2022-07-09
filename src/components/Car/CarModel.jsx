import * as THREE from "three"
import React, { useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"

import { useAnimations } from "@react-three/drei"

export default function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/armada.gltf")
    const { actions } = useAnimations(animations, group)

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
                <primitive object={nodes.mixamorigHips} />
                <skinnedMesh
                    material={materials.Ch03_Body}
                    geometry={nodes.Ch03.geometry}
                    skeleton={nodes.Ch03.skeleton}
                />
            </group>
        </group>
    )
}
