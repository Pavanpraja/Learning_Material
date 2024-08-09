'use client';

import { useState } from "react";

const ControlColorBg = () => {
    const [bgColor, setBgColor] = useState('');

    const changebg = (e:any) =>{
        document.body.style.backgroundColor = e.target.value
        setBgColor(e.target.value)
    }

  return (
    <div className="w-[12rem] mx-auto my-[12rem] ">
        <label htmlFor="color" className="text-center">Select a color...</label>
      <input type="color" onChange={changebg} className="w-[2rem] h-[2rem] rounded-full border-[0.3rem] border-[gray]" style={{backgroundColor: bgColor}} />
    </div>
  )
}

export default ControlColorBg
