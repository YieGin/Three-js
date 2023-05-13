import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Three from "../three";
const Convas = () => {
  return (
    <div className="h-screen bg-black">
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Convas;
