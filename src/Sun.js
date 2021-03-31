

import React, { useState, useRef, useMemo, Suspense } from 'react';
import { SpinningMesh } from "./App";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useLoader, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { degrees_to_radians } from './Earth';

const Sun = ({isPaused, toScreenPosition, tooltipRef}) => {
  const origX = 3
  const coords = useRef({ x: 0, y: 0, z: 0 });
  const angle = useRef(0);
  const mesh = useRef()
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const { scale, _spotlightIntensity } = useSpring({ 
    scale: hover ? [4, 4, 4] : [3, 3, 3],
    _spotlightIntensity: !hover ? .5 : .4,
  }
  )

  console.log("HOVER", hover)

  // const { x } = useSpring({ x: hover ? 6 : 3 })
  // console.log('x', x)

  const sunRef = useRef();

  useFrame(() => {
    // const coords = toScreenPosition(mesh.current);
    // if(tooltipRef && tooltipRef.current) {
    //   tooltipRef.current.style.left = `${coords.x}px`
    //   tooltipRef.current.style.top = `${coords.y}px`
    // }
    if(isPaused) return;
    // if(sunRef && sunRef.current) {
    mesh.current.rotateY(degrees_to_radians(.3))
    // }
  })

  const texture = useLoader(TextureLoader, 'sunTexture.jpg')
  // console.log('texture', texture)
  const spotlightIntensity = .4
  console.log('spo', spotlightIntensity)
  // const { spotlightIntensity } = useSpring({ spotlightIntensity: hover ? 1.45 : .4 })
  // const spotlightZ
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
      isPaused={isPaused}
      // mesh={sunRef}
      scale={useMemo(() => scale, [hover])} hover={hover} texture={texture} mesh={mesh} />
      </>
  )

};

export default Sun;