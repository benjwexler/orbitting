import React, { useRef, useState, useLayoutEffect, Suspense } from "react";
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
import {MeshWobbleMaterial, OrbitControls} from '@react-three/drei'
import MyBox from "./MyBox";
import Sun from "./Sun";
import Scene from "./Scene";
// import Sun from './Sun';

// soft Shadows
// softShadows();


function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export const SpinningMesh = ({ rotation, layers, position, mesh, scale, texture, children, onPointerOver, onPointerOut }) => {
  
  // console.log('x', x)
  return (
    <a.mesh
      // layers={layers}
      scale={scale}
      rotation={rotation}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      position={position}
      // position={[x, y, z]}
      ref={mesh}
      castShadow>
      <sphereGeometry attach='geometry' args={[1, 16, 16]} />
      <MeshWobbleMaterial
    attach="material"
    factor={.3} // Strength, 0 disables the effect (default=1)
    speed={1} // Speed (default=1)
    map={texture}
  />
  {children}
      {/* <meshStandardMaterial map={texture}
        attach='material' /> */}
    </a.mesh>
  )
};

SpinningMesh.defaultProps = {
  onPointerOut: () => {},
  onPointerOver: () => {},
}


const App = () => {
  const [cameraPosition, setCameraPosition] = useState({x: 0, y: 0, z: 120})
  
  // setInterval(() => {

  //   setCameraPosition(prevVal => {
  //     return {...prevVal, z: prevVal.z - 10}
  //   })

  // }, 16)

 

  return (
    <>
    
      {/* <Header /> */}
      {/* <img src="earthTexture.jpg" /> */}
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, 20], fov: 90 }}
      >
  <Scene />
        {/* Allows us to move the canvas around for different prespectives */}
        {/* <OrbitControls />/ */}
      </Canvas>
      <div style={{
      position: 'absolute', minHeight: '11.5vh', width: '100vw', 
      background: 'black',
      // padding: 20,
      // paddingTop: 30,
    fontSize: 28,
    fontWight: 400,
    fontFamily: 'monospace',
    top: 0,
    display: 'flex',
    // boxShadow: '5px 5px #20253e',
    // borderBottom: '1px solid #30345e',
    }}>
      <div style={{padding: 20, marginTop: 'auto', marginBottom: 'auto'}}>Earth, Moon & Sun Animation</div>
    </div>
      <div style={{
        minHeight: '11.5vh', 
        width: '100vw', 
        background: 'black', 
        bottom: 0, left: 0, position: 'absolute',
        // borderTop: '1px solid #30345e',
        
        }}></div>
    </>
  );
};

export default App;
