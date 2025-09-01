import React from "react";
import Button from "./Button";
const PasswordGen = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 max-w-2xl mx-auto p-6 my-10 rounded-2xl shadow-lg border border-slate-700">
      <h1 className="text-center text-2xl font-semibold mb-6">
        Password Generator
      </h1>

      <div className="flex justify-around">
        <div className="w-1/2 m-auto text-center text-slate-100 bg-slate-800 border-slate-700 border-1 rounded-xl h-10 flex items-center justify-center">
          Password
        </div>
        <div>
          <img src="./" alt="image" />
        </div>
      </div>

      {/* Button */}
      <div className="text-center pt-2">
        <Button btnTxt={"Generate"} />
      </div>
    </div>
  );
};

export default PasswordGen;
