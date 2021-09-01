
import React, {useMemo, useRef} from 'react';
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useFrame, useLoader } from "react-three-fiber";
import starImg from './images/star.png';
import { standardRefreshTime } from './Earth';


const Stars = ({isPaused}) => {

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
      star.acceleration = 0.025;
      _vertices.push(star)
    }
    return _vertices;

  }, [])
  
  const texture = useLoader(TextureLoader, starImg)
  const ref = useRef();

  const clockRef = useRef(new THREE.Clock());
  const clock = clockRef.current;
  const prevTime = useRef(0);

  useFrame(() => {
    if(isPaused) return;
    const currentTime = clock.getElapsedTime();
    const ratio = (currentTime - prevTime.current) / standardRefreshTime;
    prevTime.current = currentTime;

    vertices.forEach(p => {
      p.z += (p.acceleration * ratio)
      
      if (p.z > -40) {
        p.z = -90;
        p.velocity = 0;
      }
    });
    ref.current.setFromPoints(vertices)
  })
  return (
    <points
      ref={pointsRef}
      >
      <bufferGeometry attach="geometry"  ref={ref} />
      <pointsMaterial 
        color={0xaaaaaa}
        size={0.3}
        map={texture}
      />
    </points>
  )
}

export default Stars;
