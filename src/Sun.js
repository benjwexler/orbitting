

import React, { useRef, useMemo } from 'react';
import * as THREE from "three";
import { SpinningMesh } from "./App";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useLoader, useFrame } from "react-three-fiber";
import { useSpring, a } from "@react-spring/three";
import { degrees_to_radians, standardRefreshTime } from './Earth';
import useStore from './context/store';
import sunImg from './images/sunTexture.jpg';

const Sun = ({isPaused, toScreenPosition, tooltipRef}) => {
  const { activeElement, setActiveElement, getIsMobile } = useStore();
  const origX = 3
  const coords = useRef({ x: 0, y: 0, z: 0 });
  const angle = useRef(0);
  const mesh = useRef()
  const isActive = activeElement?.name === 'Sun';
  const isMobile = getIsMobile();

  const getScale = () => {
    const largeArr = [4, 4, 4];
    const smallArr = [3, 3, 3];
    const arr = isActive ? largeArr : smallArr;
    if(!isMobile) return arr
    return arr.map(val => val * .9)
  }

  const { scale, _spotlightIntensity } = useSpring({ 
    scale: getScale(),
    _spotlightIntensity: !isActive ? .5 : .4,
  }
  )

  const clockRef = useRef(new THREE.Clock());
  const clock = clockRef.current;
  const prevTime = useRef(0);

  useFrame(() => {

    

    const currentTime = clock.getElapsedTime();
    const ratio = (currentTime - prevTime.current) / standardRefreshTime;
    prevTime.current = currentTime;

    
    if(isPaused) return;
    mesh.current.rotateY(degrees_to_radians(.3) * ratio)
  })

  const texture = useLoader(TextureLoader, sunImg)

  const spotlightIntensity = .4

  const spotlightProps = {
    angle: Math.PI / 150,
    penumbra: 0.5,
    // distance: isMobile ? 150 : 300,
    distance: 300,
    intensity: spotlightIntensity,
  }

  // const getPosition = (position) => {
  //   if(!isMobile || true) return position

  //   return position.map(val => val * .75)
  // }
  return (
    <>
    <spotLight
        intensity={spotlightIntensity}
        position={[0, 0, isMobile ? 7 : 10]}
      />
      <spotLight
        angle={Math.PI / 150}
        {...spotlightProps}
        position={[-100, 100, 50]}
      />
      <spotLight
        angle={Math.PI / 150}
        {...spotlightProps}
        position={[100, 100, 50]}
      />
       <spotLight
        angle={Math.PI / 150}
        {...spotlightProps}
        position={[100, -100, 50]}
      />
      <spotLight
        angle={Math.PI / 150}
        {...spotlightProps}
        position={[-100, -100, 50]}
      />
    <SpinningMesh
      layers={2}
      onPointerOver={(event) => setActiveElement({ name: 'Sun' })}
      onPointerOut={(event) => isActive ? setActiveElement(null) : undefined}
      isPaused={isPaused}
      scale={useMemo(() => scale, [isActive])} hover={isActive} texture={texture} mesh={mesh} />
      </>
  )

};

export default Sun;