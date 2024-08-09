"use client";

import { useState } from "react";

const ColorBackground = () => {
  const [bgColor, setBgColor] = useState("");

  const handleBgColor = (e: any) => {
    setBgColor(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-[2rem] my-[3rem]">
      <div
        className="w-[12rem] h-[0.2rem] mx-auto rounded-md shadow-md"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div className="flex space-x-[2rem] items-center justify-center">
        <div
          className="w-[0.2rem] h-[12rem] mx-auto rounded-md shadow-md"
          style={{ backgroundColor: bgColor }}
        ></div>
        <div
          className="w-[20rem] h-[20rem] mx-auto my-auto rounded-md shadow-md"
          style={{ backgroundColor: bgColor }}
        ></div>
        <div
          className="w-[0.2rem] h-[12rem] mx-auto rounded-md shadow-md"
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
      <div
        className="w-[12rem] h-[0.2rem] mx-auto rounded-md shadow-md"
        style={{ backgroundColor: bgColor }}
      ></div>

      <input
        type="text"
        onChange={handleBgColor}
        className="outline-0 rounded-md w-[20r
        em] p-[0.5rem] shadow-md"
        placeholder="Enter any color..."
      />
    </div>
  );
};

export default ColorBackground;
