import React, { useRef, useEffect, useState, useLayoutEffect, Suspense } from "react";

import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import "./App.css";

import { useSpring, a } from "@react-spring/three";
import { useSpring as useS, animated } from "@react-spring/web";
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import Earth from "./Earth";
import Sun from "./Sun";
import Scene from "./Scene";
import ActiveElementContextProvider from "./context/ActiveElementContext";
import GlobalContextProviders from "./context/GlobalContextProviders";
import useStore from "./context/store";
import Info from "./Info";



function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export const SpinningMesh = ({ isPaused, rotation, layers, position, mesh, scale, texture, children, onPointerOver, onPointerOut }) => {

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
        factor={isPaused ? 0 : 0} // Strength, 0 disables the effect (default=1)
        speed={1} // Speed (default=1)
        map={texture}
      />
      {children}
    </a.mesh>
  )
};

SpinningMesh.defaultProps = {
  onPointerOut: () => { },
  onPointerOver: () => { },
}


const App = () => {
  const { activeElement } = useStore();
  // console.log('activeElement', activeElement)
  // const activeElement = null;
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 120 })
  const [height, setHeight] = useState(11.5);
  const [isPaused, setIsPaused] = useState(false);
  const canvasRef = useRef();
  const tooltipRef = useRef();

  const { opacity, height: infoBodyHeight } = useS({
    config: { duration: 250 },
    opacity: activeElement ? 1 : 0,
    height: activeElement ? '100%' : '25%',
  });

  const { opacity: headerOpacity } = useS({
    config: { duration: 250 },
    opacity: activeElement ? 1 : 0,
    delay: 50
  });

  // console.log('head', headerSpring.opacity)

  useEffect(() => {

    const handleKeyDown = (ev) => {
      if (ev.code !== 'Space') return;

      setIsPaused(prevVal => !prevVal)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }

  }, [])

  return (
    <GlobalContextProviders>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, 20], fov: 90 }}
        onClick={() => setIsPaused(prevVal => !prevVal)}
      >
        <Scene
          isPaused={isPaused}
          canvasRef={canvasRef}
          tooltipRef={tooltipRef}
        />
        {/* Allows us to move the canvas around for different prespectives */}
        {/* <OrbitControls />/ */}
      </Canvas>
      <div style={{
        position: 'absolute', minHeight: `${height}vh`, width: '100vw',
        background: 'black',
        fontSize: 28,
        fontWight: 400,
        fontFamily: 'monospace',
        top: 0,
        display: 'flex',
      }}>
        <div style={{ padding: 20, paddingLeft: 25, marginTop: 'auto', marginBottom: 'auto', display: 'flex', width: '100%' }}>

          <div>{height <= 11.5 ? 'Orbitting with React-Three-Fiber' : ''}</div>
          <div style={{ marginLeft: 'auto', marginRight: 15 }}>
          </div>
        </div>
      </div>
      <div style={{
        minHeight: `${height}vh`,
        width: '100vw',
        background: 'black',
        bottom: 0, left: 0, position: 'absolute',
        display: 'flex',
        fontSize: 28,
        fontWight: 400,
      }}>

        <div style={{ margin: 'auto' }}>
          <i onClick={() => setIsPaused(prevVal => !prevVal)} className={`fas ${isPaused ? 'fa-play' : 'fa-pause'}`} />
        </div>
      </div>
      <div ref={tooltipRef} id="tooltip" style={{ position: 'absolute', color: 'white' }}>Sun</div>


    <Info
      isPaused={isPaused} 
      height={height}
    />

    </GlobalContextProviders>
  );
};

export default App;
