import React, { useEffect } from "react";
import { useState } from "react";

function DisplayItem({ uID, url, usn, pass }) {
  // initialize state for copy and cursor position
  const [copy, setCopy] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  function copyToClipboard(e) {
    if (!copy) {
      // Change the state of copy variable
      setCopy(true);
      // Prevent browser default behaviour
      e.stopPropagation();
      // Copy the text to clipboard
      navigator.clipboard.writeText(pass);
      // Read the cursor position and save it to position variable
      setCursorPos({ x: e.clientX, y: e.clientY });
      // Automatically set copy variable to false after 800ms
      setTimeout(() => setCopy(false), 800);
    }
  }

  function deleteItem() {
    localStorage.removeItem(uID);
  }

  return (
    <>
      {/* Item */}
      <li className="px-6 py-4 flex justify-between items-center hover:bg-slate-700/50 transition">
        <div>
          <p className="font-medium">{url}</p>
          <p className="text-slate-400 text-sm">Username: {usn}</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Copy Button */}
          <button
            className="px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm cursor-pointer"
            onClick={copyToClipboard}
          >
            Copy
          </button>
          {/* Popup if copy button is clicked */}
          {copy && (
            <div
              className="bg-black text-white px-3 py-2 rounded-lg text-sm shadow-lg animate-fadeInOut"
              style={{
                position: "fixed",
                left: cursorPos.x + 15 + "px",
                top: cursorPos.y + 15 + "px",
                pointerEvents: "none",
                zIndex: 999,
              }}
            >
              Copied!
            </div>
          )}

          <button
            className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-sm cursor-pointer"
            onClick={deleteItem}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}

const Display = ({ items, setItems }) => {
  // Load all password from local storage on page reload
  useEffect(() => {
    // Set up temporary variable
    const tempArr = [];

    // Loop through all the items
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      try {
        // get the value for each key
        const value = JSON.parse(localStorage.getItem(key));

        //  Push if the object has expected structure in local storage {username, password, URL}
        if (value?.userName && value?.password && value?.URL) {
          tempArr.push({
            uID: value.uID,
            usn: value.userName,
            pass: value.password,
            url: value.URL,
          });
        }
      } catch (err) {
        console.log("Error Parsing localStorage item", key, err);
      }
    }
        // setItems(tempArr);

      // Only update if different
      const isSame = JSON.stringify(tempArr) === JSON.stringify(items);
      if (!isSame) setItems(tempArr);
  }, [items]);

  return (
    <div className="bg-slate-800 w-[60vw] h-[85vh] my-10 mr-15 ml-5 text-slate-100 rounded-2xl border border-slate-700 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-700">
        <h2 className="text-xl font-semibold">Saved Passwords</h2>
      </div>

      {/* Password List */}
      <ul className="divide-y divide-slate-700 overflow-y-auto h-[calc(85vh-4rem)]">
        {/* <Item url={"www.google.com"} usn={"Pearson"} pass={"12345"} />
        <Item url={"www.google.com"} usn={"Pearson"} pass={"345"} /> */}

        {/* Render all items on page load if items exist on local storage*/}
        {items.length > 0 ? (
          // loop through each items
          items.map((item, i) => (
            // Render a component for each item
            <DisplayItem
              uID={item.uID}
              url={item.url}
              usn={item.usn}
              pass={item.pass}
              key={i}
            />
          ))
        ) : (
          <p className="text-slate-400 p-5">No saved passwords.</p>
        )}
      </ul>
    </div>
  );
};

export default Display;
