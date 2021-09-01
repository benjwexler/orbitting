
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { cloneDeep } from 'lodash';
import * as THREE from "three";
import { SpinningMesh } from "./App";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useFrame, useLoader, useThree } from "react-three-fiber";
import { useSpring, a } from "@react-spring/three";
import useStore from './context/store';
import earthImg from './images/earthTexture.jpg';
import moonImg from './images/moonTexture.jpg';


export function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export const standardRefreshTime = 1 / 60;

const Earth = ({ isPaused }) => {
  const { setActiveElement, activeElement, getIsMobile, } = useStore();
  const origX = getIsMobile() ? -10 : -14;
  const moonOrigX = getIsMobile() ? 1.5 : 2;
  const coords = useRef({ x: origX, y: 0, z: 0 });
  const moonCoords = useRef({ x: moonOrigX, y: 0, z: 0 })
  const angle = useRef(0);
  const moonAngle = useRef(0);
  const mesh = useRef();
  const dummyMesh = useRef();
  const moonMesh = useRef();
  const earthMesh = useRef();
  const moonMeshReal = useRef();

  const [hover, setHover] = useState(false);

  const clockRef = useRef(new THREE.Clock());
  const clock = clockRef.current; 
  const prevTime = useRef(0);

  useFrame(() => {
    const currentTime = clock.getElapsedTime();
    const ratio = (currentTime - prevTime.current) / standardRefreshTime;
    prevTime.current = currentTime;

    if (isPaused) return;
    angle.current -= .25 * ratio;
    moonAngle.current -= 3.38 * ratio
    const radians = degrees_to_radians(angle.current);
    const newX = origX * Math.cos(radians)
    const newZ = origX * Math.sin(radians)

    const moonRadians = degrees_to_radians(moonAngle.current);
    const newMoonX = moonOrigX * Math.cos(moonRadians)
    const newMoonZ = moonOrigX * Math.sin(moonRadians)
    if (!mesh.current || !coords.current) return;
    coords.current = { x: newX, z: newZ, y: 0 }
    moonCoords.current = { x: newMoonX, y: 0, z: newMoonZ }
    mesh.current.position.x = coords.current.x
    mesh.current.position.z = coords.current.z

    moonMeshReal.current.position.x = moonCoords.current.x
    moonMeshReal.current.position.z = moonCoords.current.z
    dummyMesh.current.visible = false;
    mesh.current.visible = false;
    moonMesh.current.material.visible = false;
    earthMesh.current.position.setFromMatrixPosition(mesh.current.matrixWorld)
    earthMesh.current.rotateY(degrees_to_radians(2.5) * ratio)
    moonMesh.current.position.setFromMatrixPosition(dummyMesh.current.matrixWorld)
  })

  const texture = useLoader(TextureLoader, earthImg)
  const moonTexture = useLoader(TextureLoader, moonImg)

  const scaleActiveElement = (sizeArr, element, activeElementName) => {
    if (element !== activeElementName) return sizeArr

    return sizeArr.map(val => val * 3)

  }

  const { scale, moonScale } = useSpring({
    scale: activeElement ?.name === 'Earth' ? [1.5, 1.5, 1.5] : [.5, .5, .5],
    moonScale: activeElement ?.name === 'Moon' ? [1, 1, 1] : [.25, .25, .25],
  });

  return (
    <>
      <group>
        <SpinningMesh mesh={mesh}>
          <SpinningMesh
            texture={texture}
            mesh={dummyMesh}
            position={[0, 0, 0]}
          />

        </SpinningMesh>


      </group>
      <SpinningMesh
        rotation={[degrees_to_radians(24), 0, 0]}
        mesh={earthMesh}
        isPaused={isPaused}
        layers={3}
        scale={useMemo(() => scale, [activeElement ?.name])}
        texture={texture}
        onPointerOver={(event) => setActiveElement({ name: 'Earth' })}
        onPointerOut={(event) => (activeElement ?.name === 'Earth') ? setActiveElement(null) : undefined}

      />
      <SpinningMesh
        rotation={[degrees_to_radians(-5), 0, 0]}
        layers={1}
        isPaused={isPaused}
        mesh={moonMesh}
      >

        <SpinningMesh
          mesh={moonMeshReal}
          texture={moonTexture}
          scale={useMemo(() => moonScale, [activeElement ?.name])}
          onPointerOver={(ev) => setActiveElement({ name: 'Moon' })}
          onPointerOut={(ev) => (activeElement ?.name === 'Moon') ? setActiveElement(null) : undefined}
        />

      </SpinningMesh>

    </>
  )

};

export default Earth;