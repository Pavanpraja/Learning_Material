"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectBox } from "@/app/GlobalRedux/Features/touchedCon";

const TouchedCon = () => {
  // const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const touch = useSelector((state)=>state.touched_box)
  console.log(touch)

  const dispatch = useDispatch();


  return (
    <div>
      <button onClick={()=>dispatch(selectBox())}>Touch please</button>
    </div>
  );
};

export default TouchedCon;
