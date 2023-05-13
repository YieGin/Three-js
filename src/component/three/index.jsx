import React, { useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
const three = () => {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      console.log(y * angleToRadians(90 - 30));
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });
  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current);
      gsap.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: "slow(0.7, 0.7, false)",
      });
    }
  }, [ballRef.current]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />
      <mesh position={[-2, 0.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#fff" metalness={[0.6]} roughness={0.2} />
      </mesh>

      {/*Foloor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
      <ambientLight args={["#fff", 0.25]} />

      <spotLight
        args={["#fff", 2.5, 7, angleToRadians(25), 0.4]}
        position={[-2, 1, 0]}
        castShadow
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#d21365" />
        </mesh>
      </Environment>
    </>
  );
};

export default three;
