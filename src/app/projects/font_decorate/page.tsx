"use client";

import { useState } from "react";

const Texts: any = [{ text: 2 }, { text: 5 }, { text: 10 }];

const Page = () => {
  const [value, setValue] = useState("select");
  const [hidden, setHidden] =  useState(false)
  const [fontSize, setFontSize] = useState(0)

  const handleHidden = () =>{
    setHidden((prev)=> !prev)
  }

  const handleSelectActions = (e:any) =>{
    if(Texts[0].text === 10){
        setFontSize(10)
        console.log(fontSize)
    }
  }

  return (
    <div className="w-[20rem] p-[1rem]">
      <h1 className={`text-[${fontSize}rem]`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        laudantium natus ratione sint id debitis esse provident facere unde,
        necessitatibus ullam quisquam aliquam.
      </h1>
      <div onClick={handleHidden} className="cursor-pointer selection:bg-none">{value}</div>
      <div>{hidden && Texts.map((item:any, index:any)=>(
        <li key={index} className="cursor-pointer selection:bg-none hover:bg-black hover:text-white list-none" onClick={handleSelectActions}>{item.text}</li>
      ))}</div>
    </div>
  );
};

export default Page;
