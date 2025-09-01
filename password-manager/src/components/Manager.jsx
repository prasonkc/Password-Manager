import React, { useRef } from "react";
import Button from "./Button";
import { useState } from "react";

const Manager = () => {
  // States for data
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [URL, setURL] = useState("");
  const uID = useRef(0);


  // Handler for the Add button
  const handleAdd = (e) => {
    e.preventDefault();

    // Save to local storage with unique id
    const data = {userName, password, URL};
    localStorage.setItem(uID.current, JSON.stringify(data));
    uID.current += 1;
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 w-2xl mx-10 p-6 my-10 rounded-2xl shadow-lg border border-slate-700">
      <h1 className="text-center text-2xl font-semibold mb-6">
        Password Manager
      </h1>

      {/* Form Section */}
      <form className="space-y-4">
        {/* Website URL */}
        <div>
          <input
            className="w-full h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center"
            type="text"
            placeholder="Enter the website URL"
            value={URL}
            onChange={(e) => {setURL(e.target.value)}}
          />
        </div>

        {/* Username + Password */}
        <div className="flex gap-4">
          <input
            className="flex-1 h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
          />
          <input
            className="flex-1 h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="text-center pt-2">
          <Button type="submit" btnTxt={"Add"} onClick={handleAdd} />
        </div>
      </form>
    </div>
  );
};

export default Manager;
