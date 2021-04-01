import React, { useRef, useEffect, useState, useLayoutEffect, Suspense } from "react";
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
import Scene from "./Scene";
// import Sun from './Sun';

// soft Shadows
// softShadows();


function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export const SpinningMesh = ({ isPaused, rotation, layers, position, mesh, scale, texture, children, onPointerOver, onPointerOut }) => {

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
        factor={isPaused ? 0 : 0} // Strength, 0 disables the effect (default=1)
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
  onPointerOut: () => { },
  onPointerOver: () => { },
}


const App = () => {
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 120 })
  const [height, setHeight] = useState(11.5);
  const [isPaused, setIsPaused] = useState(false);
  const canvasRef = useRef();
  const tooltipRef = useRef();

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

  //   function toScreenPosition(obj, camera)
  // {
  //     var vector = new THREE.Vector3();

  //     var widthHalf = 0.5*canvasRef.current.style.width;
  //     var heightHalf = 0.5*canvasRef.current.style.height;

  //     obj.updateMatrixWorld();
  //     vector.setFromMatrixPosition(obj.matrixWorld);
  //     vector.project(camera);

  //     vector.x = ( vector.x * widthHalf ) + widthHalf;
  //     vector.y = - ( vector.y * heightHalf ) + heightHalf;

  //     return { 
  //         x: vector.x,
  //         y: vector.y
  //     };

  // };

  // setInterval(() => {

  //   // setHeight(prevVal => prevVal - .03 > 11.5 ? prevVal - .03 : 11.5)
  //   // setCameraPosition(prevVal => {
  //   //   return {...prevVal, z: prevVal.z - 10}
  //   // })

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
        onClick={() => setIsPaused(prevVal => !prevVal)}
      // ref={canvasRef}
      >
        <Scene
          isPaused={isPaused}
          canvasRef={canvasRef}
          tooltipRef={tooltipRef}
        // toScreenPosition={toScreenPosition}
        />
        {/* Allows us to move the canvas around for different prespectives */}
        {/* <OrbitControls />/ */}
      </Canvas>
      <div style={{
        position: 'absolute', minHeight: `${height}vh`, width: '100vw',
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
        <div style={{ padding: 20, paddingLeft: 25, marginTop: 'auto', marginBottom: 'auto', display: 'flex', width: '100%' }}>

          <div>{height <= 11.5 ? 'Earth, Moon & Sun Animation' : ''}</div>
          <div style={{ marginLeft: 'auto', marginRight: 15 }}>
            {/* <i onClick={() => setIsPaused(prevVal => !prevVal)} class={`fas ${isPaused ? 'fa-play' : 'fa-pause'}`} /> */}
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
        // borderTop: '1px solid #30345e',

      }}>

        <div style={{ margin: 'auto'}}>
            <i onClick={() => setIsPaused(prevVal => !prevVal)} class={`fas ${isPaused ? 'fa-play' : 'fa-pause'}`} />
          </div>
      </div>
      <div ref={tooltipRef} id="tooltip" style={{ position: 'absolute', color: 'white' }}>Sun</div>
    <div
      style={{
        height: '30%',
        // height: '100vh',
        background: '#ffffff14',
        maxWidth: 360,
        width: '40%',
        position: 'absolute',
        top: `${height}vh`,
        right: 0,
        padding: 0,
        color: 'white',
        borderBottomLeftRadius: 5,
      }}>
        <h2
          style={{
            // background: '#111110',
            background: '#111011',
            margin: 0,
            padding: 20,
          }}
        >Earth</h2>
        <div style={{padding: '5px 20px'}}>
        <p >Fun Facts:</p>
        <p style={{padding: '0 15px', margin: '10px 0', fontSize: 20}}>Earth is 4.54 billion years old.</p>
        </div>
      </div>
    </>
  );
};

export default App;
