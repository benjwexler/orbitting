
import React, { useState, useRef, useMemo, Suspense } from 'react';
import { SpinningMesh } from "./App";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useFrame, useLoader } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";

export function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

const MyBox = () => {
  const origX = 14;
  const moonOrigX = 2;
  const coords = useRef({ x: origX, y: 0, z: 0 });
  const moonCoords = useRef({x: moonOrigX, y: 0, z: 0})
  const angle = useRef(0);
  const moonAngle = useRef(0);
  const mesh = useRef();
  const dummyMesh = useRef();
  const moonMesh = useRef();
  const earthMesh = useRef();
  const moonMeshReal = useRef();

  useFrame(() => {
    angle.current -= .25;
    moonAngle.current += 3.38
    const radians = degrees_to_radians(angle.current);
    const newX = origX * Math.cos(radians)
    const newY = origX * Math.sin(radians)

    const moonRadians = degrees_to_radians(moonAngle.current);
    const newMoonX = moonOrigX * Math.cos(moonRadians)
    const newMoonZ = moonOrigX * Math.sin(moonRadians)
    // console.log('newMon Z', newMoonZ)
    if (!mesh.current || !coords.current) return;
    coords.current = { x: newX, z: newY, y: 0 }
    moonCoords.current = {x: newMoonX, y: 0, z: newMoonZ}
    mesh.current.position.x = coords.current.x
    mesh.current.position.z = coords.current.z

    moonMeshReal.current.position.x = moonCoords.current.x
    moonMeshReal.current.position.z = moonCoords.current.z
    // mesh.current.rotateY(degrees_to_radians(2.5))
    // mesh.current.scale
    // console.log('dummy Mesh', dummyMesh.current.matrixWorld)
    // moonMesh.current.position.setFromMatrixPosition(dummyMesh.current.matrixWorld)
    dummyMesh.current.visible = false;
    mesh.current.visible = false;
    moonMesh.current.material.visible = false;
    earthMesh.current.position.setFromMatrixPosition(mesh.current.matrixWorld)
    earthMesh.current.rotateY(degrees_to_radians(2.5))
    moonMesh.current.position.setFromMatrixPosition(dummyMesh.current.matrixWorld)
  })

  const texture = useLoader(TextureLoader, 'earthTexture.jpg')
  const texture2 = useLoader(TextureLoader, 'sunTexture.jpg')
  const moonTexture = useLoader(TextureLoader, 'moonTexture.jpg')
  // console.log('texture', texture)
  return (
    // <Suspense fallback={null}>
    <>
    <group>
      <SpinningMesh  mesh={mesh}>
        {/* <SpinningMesh /> */}
        <SpinningMesh 
          // scale={useMemo(() => [.25, .25, .25], [])}
          texture={texture}
          mesh={dummyMesh}
          position={[0, 0, 0]}
        >
          {/* <SpinningMesh /> */}
        </SpinningMesh>
      
      </SpinningMesh>
      
  
    </group>
    <SpinningMesh
      rotation={[degrees_to_radians(24), 0, 0]}
      mesh={earthMesh}
      layers={3}
      scale={useMemo(() => [.5, .5, .5], [])} texture={texture}

    />
    <SpinningMesh 
     rotation={[degrees_to_radians(-5), 0, 0]}
    layers={1}
    // position={[0, 15, 0]}
    mesh={moonMesh}
    // texture={texture2}
    // scale={useMemo(() => [.25, .25, .25], [])}
  >

  <SpinningMesh
 
    // position={[5, 0, 0]}
    mesh={moonMeshReal}
    texture={moonTexture}
    scale={useMemo(() => [.25, .25, .25], [])}
  />

  </SpinningMesh>
   
    </>
    // </Suspense>
  )

};

export default MyBox;