import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Eslint, Husky, Prettier, TypeScript } from "./Components/Icons";

function App() {
  return (
    // eslint-disable-next-line max-len
    <div className="App text-blue-600 flex items-center flex-col text-8xl w-[80%] h-[80vh] border rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 justify-center">
      <div className="flex items-center">
        <h1>React Js</h1>
        <i className="bi bi-balloon-fill ml-3" />
      </div>
      <div className="flex items-center space-x-6 mt-10">
        <TypeScript />
        <Eslint />
        <Prettier />
        <Husky />
      </div>
    </div>
  );
}

export default App;
