
import React, { useEffect, useState, useRef, useMemo, Suspense } from 'react';
import {cloneDeep} from 'lodash';
import * as THREE from "three";
import { SpinningMesh } from "./App";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useFrame, useLoader, useThree } from "react-three-fiber";
import { useSpring, a } from "@react-spring/three";
import { _toScreenPosition } from './helpers';
import useStore from './context/store';

export function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

const Earth = ({isPaused, tooltipRef}) => {
  // console.log("HOW OFTEN RE")
  // const { camera, viewport, size } = useThree()
  const { setActiveElement } = useStore();
  // const setActiveElement = () => {}
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

  const [hover, setHover] = useState(false)

  useEffect(() => {
    const activeElement = hover ? ({name: 'Earth'}) : undefined;
    setActiveElement(activeElement)
  }, [hover])

  useFrame(() => {
    //  const _coords = _toScreenPosition(earthMesh.current, camera, size);
//      var box = new THREE.Box3().setFromObject( earthMesh.current );
// console.log( box.min, box.max, box.getSize() );
// console.log('earthMess', earthMesh.current)
if(earthMesh.current && earthMesh.current.getBoundingBox) {
  // console.log('get bounding', earthMesh.current.getBoundingBox())
}
    //  console.log(coords)
    // if(tooltipRef && tooltipRef.current) {
    //   tooltipRef.current.style.left = `${_coords.x}px`
    //   tooltipRef.current.style.top = `${_coords.y}px`
    // }
    if(isPaused) return;
    angle.current -= .25;
    moonAngle.current += 3.38
    const radians = degrees_to_radians(angle.current);
    const newX = origX * Math.cos(radians)
    const newZ = origX * Math.sin(radians)

    const moonRadians = degrees_to_radians(moonAngle.current);
    const newMoonX = moonOrigX * Math.cos(moonRadians)
    const newMoonZ = moonOrigX * Math.sin(moonRadians)
    // console.log('newMon Z', newMoonZ)
    if (!mesh.current || !coords.current) return;
    coords.current = { x: newX, z: newZ, y: 0 }
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

  const { scale, _spotlightIntensity } = useSpring({ 
    scale: hover ? [1.5, 1.5, 1.5] : [.5, .5, .5],
  });
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
      isPaused={isPaused}
      layers={3}
      scale={useMemo(() => scale, [hover])}
      texture={texture}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}

    />
    <SpinningMesh 
     rotation={[degrees_to_radians(-5), 0, 0]}
    layers={1}
    isPaused={isPaused}
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

export default Earth;