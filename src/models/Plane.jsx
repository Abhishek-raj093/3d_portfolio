import React , { useRef, useEffect } from 'react';

import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props}) => {

  // Load the 3D model and animations from the provided GLTF file
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane
