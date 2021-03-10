

import React, { useState, useRef, useMemo, Suspense } from 'react';
import { SpinningMesh } from "./App";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useLoader, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { degrees_to_radians } from './MyBox';

const Sun = () => {
  const origX = 3
  const coords = useRef({ x: 0, y: 0, z: 0 });
  const angle = useRef(0);
  const mesh = useRef()
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const { scale } = useSpring({ scale: hover ? [6, 6, 6] : [3, 3, 3] })

  // const { x } = useSpring({ x: hover ? 6 : 3 })
  // console.log('x', x)

  const sunRef = useRef();

  useFrame(() => {
    // if(sunRef && sunRef.current) {
    mesh.current.rotateY(degrees_to_radians(.3))
    // }
  })

  const texture = useLoader(TextureLoader, 'sunTexture.jpg')
  // console.log('texture', texture)
  const spotlightIntensity = 0.4;
  return (
    <>
    <spotLight
        // ref={spotLightRef}
        // angle={Math.PI / 10}
        // penumbra={0.5}
        // decay={2}
        // distance={20}
        intensity={spotlightIntensity}
        position={[0, 0, 10]}
      />
      <spotLight
        // ref={spotLightRef}
        angle={Math.PI / 150}
        penumbra={0.5}
        // decay={2}
        distance={300}
        intensity={spotlightIntensity}
        position={[-100, 100, 50]}
      />
      <spotLight
        angle={Math.PI / 150}
        penumbra={0.5}
        // decay={2}
        distance={300}
        intensity={spotlightIntensity}
        position={[100, 100, 50]}
      />
       <spotLight
        angle={Math.PI / 150}
        penumbra={0.5}
        // decay={2}
        distance={300}
        intensity={spotlightIntensity}
        position={[100, -100, 50]}
      />
      <spotLight
        angle={Math.PI / 150}
        penumbra={0.5}
        // decay={2}
        // distance={300}
        intensity={spotlightIntensity}
        position={[-100, -100, 50]}
      />
    <SpinningMesh
      layers={2}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      // mesh={sunRef}
      scale={useMemo(() => scale, [hover])} hover={hover} texture={texture} mesh={mesh} />
      </>
  )

};

export default Sun;