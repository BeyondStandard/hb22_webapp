import { Canvas, useFrame, useStore, useThree } from "@react-three/fiber"
import React, { useMemo, useRef, useState } from "react"
import * as THREE from "three";
// import PropTypes from 'prop-types'


function Box(props: JSX.IntrinsicElements['mesh']) {

  const ref = useRef<THREE.Mesh>(null!)

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => (ref.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function CarModel() {
  return (
    <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
  )
}
