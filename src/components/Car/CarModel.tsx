import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export default function CarModel({ ...props }) {
    const group = useRef()
    // const { nodes, materials } = useGLTF("src/assets/models/car1/car1.gltf")
    const { nodes, materials } = useGLTF("src/assets/models/audi_r8.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.car_body.geometry}
                material={materials.MAIN}
                position={[0.5, 0, 0.5]}
            >
                {/* Left Door */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_l.geometry}
                    material={materials.MAIN}
                    position={[0.91, 0.68, 0.64]}
                >
                    {/* Left Front Glass */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.win_door_l001.geometry}
                        material={materials.WINDOW}
                        position={[-0.15, 0.7, -0.73]}
                    />
                </mesh>
                {/* Right Door */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_r.geometry}
                    material={materials.MAIN}
                    position={[-0.91, 0.68, 0.64]}
                >
                    {/* Right Front Glass */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.win_door_r001.geometry}
                        material={materials.WINDOW}
                        position={[0.15, 0.7, -0.73]}
                    />
                </mesh>
                {/* Back Plate */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.free_number.geometry}
                    material={materials.MAIN}
                    position={[0, 0.79, -1.77]}
                />
                {/* Right Seat */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.interior.geometry}
                    material={materials.MAIN}
                    position={[0.94, 0.6, -0.07]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.44, 0.4, 0.4]}
                />
                {/* Left Back Wheel */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_bl.geometry}
                    material={materials.MAIN}
                    position={[0.78, 0.33, -1.24]}
                    rotation={[0, 1.57, 0]}
                    scale={0.32}
                />
                {/* Right Back Wheel */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_br.geometry}
                    material={materials.MAIN}
                    position={[-0.78, 0.33, -1.24]}
                    rotation={[0, 1.57, 0]}
                    scale={0.32}
                />
                {/* Left Front Wheel */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_fl.geometry}
                    material={materials.MAIN}
                    position={[0.78, 0.33, 1.07]}
                    rotation={[0, 1.17, 0]}
                    scale={0.32}
                />
                {/* Right Front Wheel */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_fr.geometry}
                    material={materials.MAIN}
                    position={[-0.78, 0.33, 1.07]}
                    rotation={[0, 1.17, 0]}
                    scale={0.32}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.windows.geometry}
                    material={materials.WINDOW}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload("src/assets/models/car1/car1.gltf")
