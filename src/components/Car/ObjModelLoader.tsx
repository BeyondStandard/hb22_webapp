/* eslint-disable */
import * as React from "react"
import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"

// import { useAnimations } from "@react-three/drei"

// function loadObject(obj: any, mc: any) {
//     return new OBJLoader().setMaterials(mc).load(obj, (group) => {})
// }

// function loadMaterial(obj: any, mtl: any) {
//     return new MTLLoader().setPath(obj).load(mtl, (mc) => {
//         loadObject(obj, mc)
//         return new OBJLoader().setMaterials(mc).load(obj, (group) => {

//         })
//     })
// }

// export default function Model(props) {
//     const group = useRef()
//     const { nodes, materials, animations } = useGLTF("/armada.gltf")
//     const { actions } = useAnimations(animations, group)

//     return (
//         <group ref={group} {...props} dispose={null}>
//             <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
//                 <primitive object={nodes.mixamorigHips} />
//                 <skinnedMesh
//                     material={materials.Ch03_Body}
//                     geometry={nodes.Ch03.geometry}
//                     skeleton={nodes.Ch03.skeleton}
//                 />
//             </group>
//         </group>
//     )
// }

// function Model(props: any) {
//     const ref = React.useRef()

//     const { objSrc, mtlSrc, textureSrc } = props

//     const materials = useLoader(MTLLoader, mtlSrc, (loader) => {
//         const loadingManager = new THREE.LoadingManager()
//         loadingManager.setURLModifier((url) => {
//             if (_.endsWith(url, ".png") && textureSrc) {
//                 return textureSrc
//             }
//             return url
//         })
//         loader.manager = loadingManager
//     })

//     let object = useLoader(OBJLoader, objSrc, (loader) => {
//         materials.preload()
//         loader.setMaterials(materials)
//     })

//     return (
//         <primitive ref={ref} object={object}>
//             <ambientLight />
//             <pointLight position={[0, 10, 0]} />
//         </primitive>
//     )
// }

export default function ObjModelLoader() {
    const [group, setGroup] = useState<THREE.Group>(new THREE.Group())
    const ref = useRef<THREE.Mesh>(null!)

    const mtlFile = "/src/assets/models/LowPoly/Textures/carPolice.png"
    const objFile = "/src/assets/models/LowPoly/Low_Poly_Vehicles_carPolice.obj"
    const objFile2 = "/src/assets/models/LowPoly/Low_Poly_Vehicles_car01.obj"
    const mtlFile2 = "/src/assets/models/LowPoly/Textures/car01.png"

    const texture = useLoader(MTLLoader, mtlFile2)
    const obj = useLoader(OBJLoader, objFile2, (loader) => {
        texture.preload()
        // loader.setMaterials(texture)
    })

    // const mtlLoader = new MTLLoader().setPath(objFile2).load(mtlFile2, (mc) => {
    //     mc.preload()
    //     var objLoader = new OBJLoader()
    //         .setMaterials(mc)
    //         .load(objFile2, (group) => {
    //             setGroup(group)
    //         })
    // })

    return (
        <>
            {/* <ambientLight intensity={0.2} /> */}
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
            <mesh>
                <primitive
                    material={texture}
                    object={obj}
                    scale={[0.01, 0.01, 0.01]}
                    position={[0, -1, 0]}
                />
                {/* <sphereGeometry args={[1, 32, 32]} /> */}
                {/* <meshStandardMaterial map={mtl} attach="material" /> */}
            </mesh>
            {/* <Model objSrc={objFile2} mtlSrc={mtlFile2} textureSrc={mtlFile2} /> */}
        </>
    )
}
