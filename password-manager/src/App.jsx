import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Display from "./components/Display";
import PasswordGen from "./components/PasswordGen"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex mx-auto">
          {/* Left side - password import and generator */}
          <div className="flex-col">
              <Manager />
              <PasswordGen />
          </div>
          {/* right side - password manager display */}
            <Display />
        </div>
      </div>
    </>
  );
}

export default App;
