import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stats, Html, Text } from "@react-three/drei";
import Background from "./Background";


const App = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <OrbitControls />
        <Background />
      </Canvas>
    </>
  );
};

export default App;
