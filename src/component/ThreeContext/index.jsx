import gsap from "gsap";
import React, { createContext, useEffect, useRef } from "react";

export const ThreeContext = createContext();

export const ProviderContext = ({ children }) => {
  const ballRef = useRef(null);
  const Test = () => {
    useEffect(() => {
      if (!!ballRef.current) {
        console.log(ballRef.current);
        gsap.to(ballRef.current.position, {
          x: 2,
          duration: 2,
        });
      }
    }, [ballRef.current]);
  };
  return (
    <ThreeContext.Provider value={{ Test }}>{children}</ThreeContext.Provider>
  );
};
