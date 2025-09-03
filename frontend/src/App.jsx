import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Display from "./components/Display";
import PasswordGen from "./components/PasswordGen";

function App() {
  // State Variables for items
  // Lifted state for items that is passed to Display and Manager
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Send Request to Backend
  useEffect(() => {
    fetch("http://localhost:3000/get-data")
    .then(res => res.json())
    .then(data => console.log("Backend Response: " + JSON.stringify(data)))
    .catch(err => console.error("Error connecting to backend:", err));
  }, [])

  
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          {/* Left side - password import and generator */}
          <div className="flex-col">
              <Manager items={items} setItems={setItems} />
              <PasswordGen />
          </div>
          {/* right side - password manager display */}
            <Display items={items} setItems={setItems}/>
        </div>
      </div>
    </>
  );
}

export default App;
