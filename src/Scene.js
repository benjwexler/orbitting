
import React, { useRef, useCallback, useState, useEffect, useLayoutEffect, Suspense } from "react";
//R3F
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

// Deai - R3F
// import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
//Components
// import Header from "./components/header";
// Styles
import "./App.css";
// React Spring
import { useSpring, a } from "react-spring/three";
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import Earth from "./Earth";
import Sun from "./Sun";
import Stars from "./Stars";

import {cloneDeep} from 'lodash'

const Scene = ({isPaused, canvasRef, tooltipRef}) => {
  const { camera, viewport, size } = useThree()
  const ambientLightRef = useRef()
  const spotLightRef = useRef()

  function _toScreenPosition(_obj)
  {
    const obj = cloneDeep(_obj)
      var vector = new THREE.Vector3();

      // console.log('viewport', viewport())
      // console.log('size', size)
      // return null
  
      var widthHalf = 0.5*size.width;
      var heightHalf = 0.5*size.height;
  
      obj.updateMatrixWorld();
      // console.log('obj', obj.matrixWorld)
      vector.setFromMatrixPosition(obj.matrixWorld);
      vector.project(camera);
  
      vector.x = ( vector.x * widthHalf ) + widthHalf;
      vector.y = - ( vector.y * heightHalf ) + heightHalf;

      // console.log('X', vector.x)
      // console.log('Y', vector.y)
  
      return { 
          x: vector.x,
          y: vector.y
      };
  
  };

  useEffect(() => {
    // camera.layers.enable(1)
    // camera.layers.enable(2)
    // camera.layers.enable(3)
    // console.log('camera layers', camera.layers)
    // ambientLightRef.current.layers.enable(1)
    // ambientLightRef.current.layers.enable(2)
    // ambientLightRef.current.layers.disable(1)
    // spotLightRef.current.layers.disable(1)
    // spotLightRef.current.layers.enable(1)
    
    // spotLightRef.current.layers.disableAll()
    // spotLightRef.current.layers.enable(3)
    // console.log('spotLightRef.current.layers.', spotLightRef.current.layers)
  }, [])

  const toScreenPosition = useCallback((obj) => _toScreenPosition(obj), [])

  const spotlightIntensity = 0.15;
  return (
    <>
      <ambientLight ref={ambientLightRef } intensity={0.05} />
     
      <pointLight

        position={[0, 0, 0]}
      />
      <group >
        <Suspense fallback={null} >
        <Stars isPaused={isPaused}/>
          <Earth

          tooltipRef={tooltipRef}
          // toScreenPosition={toScreenPosition}
          isPaused={isPaused}

          />
          <Sun 
            tooltipRef={tooltipRef}
            // toScreenPosition={toScreenPosition}
            isPaused={isPaused}

            />
        </Suspense>
      </group>
    </>
  );
}

export default Scene;