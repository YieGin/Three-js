import Canvas from "./component/Convas";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProviderContext } from "./component/ThreeContext";

const App = () => {
  return (
    <BrowserRouter>
      <ProviderContext>
        <Routes>
          <Route path="/" element={<Canvas />}></Route>
        </Routes>
      </ProviderContext>
    </BrowserRouter>
  );
};

export default App;
