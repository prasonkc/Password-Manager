import React from "react";
import Button from "./Button";
const PasswordGen = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 max-w-2xl mx-auto p-6 my-10 rounded-2xl shadow-lg border border-slate-700">
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
          />
        </div>

        {/* Username + Password */}
        <div className="flex gap-4">
          <input
            className="flex-1 h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center"
            type="text"
            placeholder="Username"
          />
          <input
            className="flex-1 h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center"
            type="password"
            placeholder="Password"
          />
        </div>

        {/* Button */}
        <div className="text-center pt-2">
          <Button btnTxt={"Add"} />
        </div>
      </form>
    </div>
  );
};

export default PasswordGen;
