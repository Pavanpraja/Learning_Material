'use client';

import { decrement, increment } from "@/app/GlobalRedux/Features/counter";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Counter = () => {

    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
