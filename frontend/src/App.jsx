import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Display from "./components/Display";
import PasswordGen from "./components/PasswordGen";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  // State Variables for items
  // Lifted state for items that is passed to Display and Manager
  const [items, setItems] = useState([]);
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="flex">
            {/* Left side - password import and generator */}
            <div className="flex-col">
              <Manager items={items} setItems={setItems} />
              <PasswordGen />
            </div>
            {/* right side - password manager display */}
            <Display items={items} setItems={setItems} />
          </div>
        </div>

        <Routes>
          <Route path="/password-manager" element={<Manager/>} />
          <Route path="/password-display" element={<Display/>} />
          <Route path="/password-generator" element={<PasswordGen/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
