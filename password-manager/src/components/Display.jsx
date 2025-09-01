import React from "react";

function Item({ url, usn, pass }) {
  return (
    <>
      {/* Item */}
      <li className="px-6 py-4 flex justify-between items-center hover:bg-slate-700/50 transition">
        <div>
          <p className="font-medium">{url}</p>
          <p className="text-slate-400 text-sm">Username: {usn}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm cursor-pointer">
            Copy
          </button>
          <button className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-sm cursor-pointer">
            Delete
          </button>
        </div>
      </li>
    </>
  );
}

const Display = () => {
  return (
    <div className="bg-slate-800 w-[50vw] h-[85vh] my-10 text-slate-100 rounded-2xl border border-slate-700 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-700">
        <h2 className="text-xl font-semibold">Saved Passwords</h2>
      </div>

      {/* List */}
      <ul className="divide-y divide-slate-700 overflow-y-auto h-[calc(85vh-4rem)]">
        {/* Another Item */}
        <Item url={"www.google.com"} usn={"Pearson"}/>
        <Item url={"www.google.com"} usn={"Pearson"}/>
      </ul>
    </div>
  );
};

export default Display;
