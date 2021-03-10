
import React, { useRef, useState, useEffect, useLayoutEffect, Suspense } from "react";
//R3F
import { Canvas, useFrame, useThree } from "react-three-fiber";
// Deai - R3F
// import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
//Components
// import Header from "./components/header";
// Styles
import "./App.css";
// React Spring
import { useSpring, a } from "react-spring/three";
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import MyBox from "./MyBox";
import Sun from "./Sun";
import Stars from "./Stars";

const Scene = () => {
  const { camera } = useThree()
  const ambientLightRef = useRef()
  const spotLightRef = useRef()

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

  const spotlightIntensity = 0.15;
  return (
    <>
      <ambientLight ref={ambientLightRef } intensity={0.02} />
     
      <pointLight

        position={[0, 0, 0]}
      />
      <group >
        <Suspense fallback={null} >
        <Stars />
          <MyBox />
          <Sun />
        </Suspense>
      </group>
    </>
  );
}

export default Scene;