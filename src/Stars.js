
import React, {useMemo, useRef} from 'react';
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useFrame, useLoader, useUpdate } from "react-three-fiber";

const Stars = () => {


const pointsRef = useRef();
  const vertices = useMemo(() => {
    const _vertices = []
    for(let i=0;i<2000;i++) {
      const star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      star.velocity = 0;
      star.acceleration = 0.02;
      _vertices.push(star)
    }
    return _vertices;

  }, [])

  console.log('vert', vertices)
  
  const texture = useLoader(TextureLoader, 'star.png')
  const ref = useRef();
  // const ref = useUpdate(geometry => {
  //   // geometry.setFromPoints(vertices)
  // }, [])

  useFrame(() => {
    vertices.forEach(p => {
      // p.velocity += p.acceleration
      // p.z += p.velocity;
      p.z += p.acceleration
      
      if (p.z > 100) {
        p.z = -100;
        p.velocity = 0;
      }
    });
    // ref.current.verticesNeedUpdate = true;
    ref.current.setFromPoints(vertices)
    // pointsRef.current.rotation.y +=0.002;
  })
  return (
    <points
      ref={pointsRef}
      // ref={ref}
      // onClick={e => console.log('click')}
      // onPointerOver={e => console.log('hover')}
      // onPointerOut={e => console.log('unhover')}
      >
      <bufferGeometry attach="geometry"  ref={ref} />
      {/* <sphereGeometry  vertices={vertices} /> */}
      <pointsMaterial 
      // attach="material" 
      color={0xaaaaaa}
      // color="blue"
        size={0.2}
        map={texture}
        // vertexColors size={10} sizeAttenuation={false}
      />
    </points>
  )
}

export default Stars;
